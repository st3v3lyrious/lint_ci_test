pipeline {
  agent any
  stages {
    stage('SET CI') {
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