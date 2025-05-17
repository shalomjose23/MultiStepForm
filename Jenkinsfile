pipeline {
    agent any

    tools {
        nodejs "Node16"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/shalomjose23/MultiStepForm.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test' // or your test command
            }
        }

        stage('Build App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy stage - implement deployment to Docker/Kubernetes or server'
                // Add deployment logic here if applicable
            }
        }
    }
}
