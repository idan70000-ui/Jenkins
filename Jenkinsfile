pipeline {

   agent any

   stages {

      stage('Checkout') {
        steps {
           echo "מושכים את הקוד מהמאגר"
           checkout scm
        }
      }

      stage('Install') {
        steps {
           echo "מתקינים תלויות"
           sh "npm ci"
        }
      }

      stage('Test') {
        steps {
           echo "מריצים בדיקות אם יש לנו ברכה ריקה זה ייכשל כאן"
           sh "npm test"
        }
      }

      stage('Build image') {
        steps {
           echo "בונים Docker Image"
           sh 'docker build -t jenkins:${BUILD_NUMBER} -t jenkins:latest .'
        }
      }

      stage('Deploy') {
            steps {
                echo 'מריצים את הגרסה החדשה על פורט 8001'
                sh "
                docker rm -f greets-live
               'docker run -d --name filename-live-${BUILD_NUMBER} -p 8001:8000 jenkins:${BUILD_NUMBER}'
                   "
            }
      }

   }

   post {
      success {
         echo "הכל עבר בהצלחה 🧨"
      }
      failure {
         echo "משהו השתבש 😫"
      }
   }

}