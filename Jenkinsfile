pipeline {
    agent any
    
    stages {
        stage('Clonar repositorio') {
            steps {
                git 'https://github.com/miborja/node-jenkins.git'
            }
        }
        stage('Down, Build and Up') {
            steps {
                script {
                    sh "docker-compose down --remove-orphans"
                    sh "docker-compose up -d --build" 
                }
            }
        }
    }
}
