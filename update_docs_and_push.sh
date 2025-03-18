#!/bin/bash

# Step 1: Run the update_docs.sh script
./update_docs.sh

# Step 2: Add changes
git add docs/

# Step 3: Commit changes
git commit -m "Update documentation files"

# Step 4: Push changes
git push origin main  # Change 'main' to your correct branch if needed

echo "Documentation updated and pushed successfully!"

