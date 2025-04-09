pipeline {
    agent any
    environment {
        NETLIFY_AUTH_TOKEN = credentials('netlify-token')  // Jenkins credential ID
        NETLIFY_SITE_ID = 'f5cc6af6-deb4-43a1-a40e-daf7ece0daa2'  // Replace with your actual Site ID
        NODE_OPTIONS = '--openssl-legacy-provider'  // Fix for OpenSSL issue in Node.js
    }
    stages {
        stage('Install') {
            steps {
                bat 'rd /s /q node_modules'  // Remove existing node_modules
                bat 'npm install'  // Install dependencies
            }
        }

        stage('List Files') {
            steps {
                // Listing the files in the root directory of the Jenkins workspace to verify the path
                bat 'dir C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\Arman Golkar\\'
                // Additionally, you can list the files in the src folder to ensure it exists
                bat 'dir C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\Arman Golkar\\src\\'
            }
        }

        stage('Build') {
            steps {
                // Run build command
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                // Run tests by specifying the path to the test file directly
                bat 'npm test -- --watchAll=false --verbose src/App.test.js'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy to Netlify
                bat '''
                npm install -g netlify-cli
                netlify deploy --dir=build --prod --auth=$NETLIFY_AUTH_TOKEN --site=$NETLIFY_SITE_ID
                '''
            }
        }
    }
}
