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
                bat 'rd /s /q node_modules'
                bat 'npm install'
            }
        }
        stage('List Files') {
         steps {
        bat 'dir C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\Arman Golkar\\src\\'
    }
}

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
            
                bat 'npm test -- --watchAll=false --verbose src/App.test.js'

            }
        }
        stage('Deploy') {
            steps {
                bat '''
                npm install -g netlify-cli
                netlify deploy --dir=build --prod --auth=$NETLIFY_AUTH_TOKEN --site=$NETLIFY_SITE_ID
                '''
            }
        }
    }
}
