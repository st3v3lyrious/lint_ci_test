pipeline {
  agent any
  stages {
    stage('error') {
      parallel {
        stage('npm install') {
          steps {
            sh 'npm install'
          }
        }
        stage('linting') {
          steps {
            sh 'npm run lint'
          }
        }
      }
    }
  }
}