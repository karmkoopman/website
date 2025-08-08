# Deployment Guide

This project uses GitHub Actions to automatically build and deploy the application to a web host via SFTP.

## Setup Instructions

### 1. GitHub Secrets Configuration

You need to configure the following secrets in your GitHub repository:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add the following repository secrets:

#### Required Secrets:

- **`SFTP_SERVER`**: Your SFTP server hostname (e.g., `5018367769.ssh.w2.strato.hosting`)
- **`SFTP_USERNAME`**: Your SFTP username (e.g., `su162101`)
- **`SFTP_PASSWORD`**: Your SFTP password
- **`SFTP_REMOTE_PATH`**: The directory on your SFTP server where files should be uploaded (e.g., `/public_html/`)

### 2. How to Add Secrets

1. In your GitHub repository, go to **Settings**
2. Click on **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each secret with the appropriate name and value

### 3. SFTP Password Setup

For Strato hosting, you'll need your SFTP password:

1. **Get your SFTP password** from your Strato control panel
2. **Make sure it's secure** and not shared publicly
3. **This will be used as the `SFTP_PASSWORD` secret**

### 4. Deployment Trigger

The deployment will automatically trigger when:
- You push to the `main` or `master` branch
- You manually trigger the workflow from the Actions tab

### 5. Build Output

The workflow will:
1. Install Node.js dependencies
2. Build the Vite application (outputs to `./dist/`)
3. Upload the built files to your SFTP server

### 6. Troubleshooting

- **Build fails**: Check that all dependencies are properly listed in `package.json`
- **SFTP connection fails**: Verify your password and server details
- **Files not appearing**: Check the `SFTP_REMOTE_PATH` path is correct
- **Permission denied**: Ensure your SFTP password is correct

### 7. Security Notes

- Never commit SFTP passwords to your repository
- Use strong, unique passwords for your SFTP account
- Keep your password secure and never share it
- SFTP is more secure than FTP as it encrypts all data

### 8. Customization

You can modify the workflow file (`.github/workflows/sftp-deploy.yml`) to:
- Change the trigger branches
- Add additional build steps
- Modify the deployment settings
- Change the Node.js version 