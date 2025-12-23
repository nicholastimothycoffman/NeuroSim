#!/bin/bash

# Define output file
DOCS_DIR="docs"
OUTPUT_FILE="$DOCS_DIR/directory_structure_tree.md"

# Ensure docs directory exists
mkdir -p $DOCS_DIR

# Generate tree structure and save to file
echo "# Project Directory Structure" > $OUTPUT_FILE
echo "" >> $OUTPUT_FILE
echo "\`\`\`" >> $OUTPUT_FILE
tree -L 3 --dirsfirst >> $OUTPUT_FILE
echo "\`\`\`" >> $OUTPUT_FILE

echo "Directory structure updated in $OUTPUT_FILE"

