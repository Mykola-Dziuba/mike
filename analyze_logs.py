import os
import re
import argparse
from collections import defaultdict

# Patterns indicating delays or performance issues
DELAY_PATTERNS = [
    r'timeout',
    r'latency.*?(ms|s)',
    r'delay(ed)?',
    r'slow',
    r'connection (reset|timed out)',
    r'504 Gateway Timeout',
    r'service unavailable',
    r'error.*(timeout|latency)',
]

# Compile regex patterns for performance
compiled_patterns = [re.compile(pat, re.IGNORECASE) for pat in DELAY_PATTERNS]

# Dictionary to store findings: service -> list of (timestamp, log line)
report = defaultdict(list)

def analyze_log_file(filepath):
    # Derive service name from file name (e.g., service1.log -> service1)
    service_name = os.path.basename(filepath).split('.')[0]
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        for i, line in enumerate(f):
            for pattern in compiled_patterns:
                if pattern.search(line):
                    # Try to extract timestamp from the log line
                    timestamp_match = re.search(r'\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}', line)
                    timestamp = timestamp_match.group(0) if timestamp_match else f"line {i}"
                    report[service_name].append((timestamp, line.strip()))
                    break  # Stop at first matching pattern

def main():
    parser = argparse.ArgumentParser(description="Analyze Kubernetes microservice logs for delays.")
    parser.add_argument("log_folder", help="Path to the folder containing log files")
    args = parser.parse_args()

    log_dir = args.log_folder

    if not os.path.isdir(log_dir):
        print(f"Error: '{log_dir}' is not a valid directory.")
        return

    # Find all .log files in the directory
    log_files = [os.path.join(log_dir, fname) for fname in os.listdir(log_dir) if fname.endswith('.log')]

    if not log_files:
        print(f"No .log files found in '{log_dir}'")
        return

    # Analyze each file
    for log_file in log_files:
        analyze_log_file(log_file)

    # Print summary report
    print("\n===== DELAY/ERROR REPORT =====\n")
    for service, entries in report.items():
        print(f"Service: {service}")
        print(f"  Total issues found: {len(entries)}")
        for timestamp, entry in entries[:10]:  # Show up to 10 log entries per service
            print(f"    [{timestamp}] {entry}")
        if len(entries) > 10:
            print(f"    ... and {len(entries) - 10} more entries")
        print()

if __name__ == "__main__":
    main()
