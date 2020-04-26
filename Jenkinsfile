lEnv=''
majorEnv=''
ecr_path=''
assume_role=''


pipeline {
	agent any
	stages {
	    stage('Setup'){
	        steps{
	            script{
	                lEnv=ENV.toLowerCase()
					majorEnv=lEnv.split("-")[0]
					echo "$ENV from $BRANCH major is $lEnv"
					if("$ENV".contains('L4')) {
						ecr_path="${ECR_URL_PROD}/cs-portal-$lEnv-fe-hub:latest"
						assume_role = "${SVC_PROD_ROLE}"
					} else {
						ecr_path="${ECR_URL}/cs-portal-$lEnv-fe-hub:latest"
						assume_role = "${SVC_DEV_ROLE}"
					}
	            }
	        }
	        
	    }
		stage('Clone') {
			steps {
				echo "building from branch $BRANCH"
				git branch: "$BRANCH", credentialsId: "366897cd-8583-4d0e-98fd-eefd9bf618db", url: 'https://github.com/pavangaddam4/claims-hub-fe.git'
				sh "pwd"
				sh "echo 'Current user: ' $USER"
			}
		}
		stage('Build') {
		    steps{
    		    script{
			        sh "npm cache verify && npm install"
					sh "npm run build"
				}
		    }
		}
		
		stage('Docker') {
			steps {
				withAWS(role: assume_role, roleSessionName: 'jenkins') {
					script{
						echo "Starting Deploy....with $ENV"
						sh "aws ecr get-login --no-include-email --region us-east-1 | bash"
						sh "sleep 5"
						sh "docker build -t $ecr_path --build-arg ENVIRONMENT=$ENV -f Dockerfile ."
						sh "docker push $ecr_path"
						sh "sleep 7"
						sh "aws ecs update-service --cluster cs-portal-$majorEnv --service cs-portal-$lEnv-fe-hub --force-new-deployment --region us-east-1"
						sh "sleep 4"
					}
				}
			}
			post {
				success {
					echo "Successfully completed...."
                    sh 'unset AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY AWS_SESSION_TOKEN'
				}
			}
		}
	}
}