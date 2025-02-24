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
                nodejs("NodeJS 23.8.0") {
                    sh 'npm install'
                }
            }
        }
        stage('npm build') {
            steps {
                nodejs("NodeJS 23.8.0") {
                    sh 'npm run build'
                }
            }
        }
        stage('List all after') {
            steps {
                sh 'ls -a'
                sh 'cd dist'
                sh 'ls -a'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}