#!/bin/bash
set -x

# Define the branch to use (from the first argument)
BRANCH=$1

# Array of submodule names and their corresponding Git repositories
declare -A submodules=(
    ["franchising"]="git@gitlab.veridata.com.ph:hims-frontend/client/franchising/18320557-franchising-module.git"
    ["system-admin"]="git@gitlab.veridata.com.ph:hims-frontend/client/user-management/system-admin.git"
    ["underwriting"]="git@gitlab.veridata.com.ph:hims-frontend/client/underwriting/underwriting.git"
    ["membership"]="git@gitlab.veridata.com.ph:hims-frontend/client/membership/membership.git"
    ["customer-care"]="git@gitlab.veridata.com.ph:hims-frontend/client/customer-care/customer-care.git"
    ["dds-requestor"]="git@gitlab.veridata.com.ph:hims-frontend/dds/dds-requestor.git"
    ["partner_network"]="git@gitlab.veridata.com.ph:hims-frontend/client/partner-network/partner_network.git"
    ["claims"]="git@gitlab.veridata.com.ph:hims-frontend/client/claims/claims.git"
)

# Remove existing folders from public
echo "Removing existing folders from public..."
rm -rf public/{claims,customer-care,dds-requestor,franchising,membership,partner_network,system-admin,underwriting}

# Set global Git config options
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999

# Loop through the submodules array and clone each one
for submodule in "${!submodules[@]}"; do
    echo "Cloning $submodule..."
    git clone -b $BRANCH "${submodules[$submodule]}" "public/$submodule"
done

echo "Done cloning frontend artifacts..."
