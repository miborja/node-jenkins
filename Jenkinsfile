pipeline {
    agent any
    
    options {
        skipDefaultCheckout() // Deshabilitar la clonación automática del repositorio
    }
    
    stages {
        stage('Clonar repositorio') {
            steps {
                git 'https://github.com/miborja/node-jenkins.git'
            }
        }
        stage('Detener y levantar contenedor') {
            when {
                not {
                    branch 'jenkins-config' // Ejecutar solo si no es la rama de configuración de Jenkins
                }
            }
            steps {
                sh "docker-compose down"
                sh "docker-compose up --build -d"
            }
        }
    }
}
