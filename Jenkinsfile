pipeline {
  agent any
  stages {
    stage('error') {
      parallel {
        stage('error') {
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