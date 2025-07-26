# Deployment Guide

This project uses GitHub Actions to automatically build and deploy the application to a web host via FTP.

## Setup Instructions

### 1. GitHub Secrets Configuration

You need to configure the following secrets in your GitHub repository:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add the following repository secrets:

#### Required Secrets:

- **`FTP_SERVER`**: Your FTP server hostname (e.g., `ftp.yourdomain.com`)
- **`FTP_USERNAME`**: Your FTP username
- **`FTP_PASSWORD`**: Your FTP password
- **`FTP_SERVER_DIR`**: The directory on your FTP server where files should be uploaded (e.g., `/public_html/` or `/www/`)

### 2. How to Add Secrets

1. In your GitHub repository, go to **Settings**
2. Click on **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each secret with the appropriate name and value

### 3. Deployment Trigger

The deployment will automatically trigger when:
- You push to the `main` or `master` branch
- You manually trigger the workflow from the Actions tab

### 4. Build Output

The workflow will:
1. Install Node.js dependencies
2. Build the Vite application (outputs to `./dist/`)
3. Upload the built files to your FTP server

### 5. Troubleshooting

- **Build fails**: Check that all dependencies are properly listed in `package.json`
- **FTP connection fails**: Verify your FTP credentials and server details
- **Files not appearing**: Check the `FTP_SERVER_DIR` path is correct

### 6. Security Notes

- Never commit FTP credentials to your repository
- Use strong, unique passwords for your FTP account
- Consider using SFTP instead of FTP for better security (requires different action)

### 7. Customization

You can modify the workflow file (`.github/workflows/deploy.yml`) to:
- Change the trigger branches
- Add additional build steps
- Modify the exclude patterns
- Change the Node.js version 