pipeline {
    agent any

    stages {
        stage('List all before') {
            steps {
                sh 'ls -a'
            }
        }
        stage('npm install') {
            steps {
                nodejs("NodeJS 13.8.0") {
                    sh 'npm install'
                }
            }
        }
        stage('npm build') {
            steps {
                nodejs("NodeJS 13.8.0") {
                    sh 'npm run build'
                }
            }
        }
        stage('List all after') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}