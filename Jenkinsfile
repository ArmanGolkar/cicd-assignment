pipeline {
    agent any
    environment {
        NETLIFY_AUTH_TOKEN = credentials('netlify-token')
        NETLIFY_SITE_ID = 'f5cc6af6-deb4-43a1-a40e-daf7ece0daa2'
        NODE_OPTIONS = '--openssl-legacy-provider'
    }
    stages {
        stage('Install') {
            steps {
                // Check if node_modules exists, and then delete it if it does
                bat '''
                IF EXIST node_modules rd /s /q node_modules
                npm install
                '''
            }
        }
        stage('List Files') {
            steps {
                bat 'dir %WORKSPACE%'
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
