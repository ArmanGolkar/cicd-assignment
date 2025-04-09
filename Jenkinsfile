pipeline {
    agent any
    environment {
        NETLIFY_AUTH_TOKEN = credentials('netlify-token') // Jenkins credential ID
        NETLIFY_SITE_ID = 'f5cc6af6-deb4-43a1-a40e-daf7ece0daa2'          // Replace with your actual Site ID
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                npm install -g netlify-cli
                netlify deploy --dir=build --prod --auth=$NETLIFY_AUTH_TOKEN --site=$NETLIFY_SITE_ID
                '''
            }
        }
    }
}
