node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Build Image') {
        /* This builds the actual image; synonymous to
         * docker build to the command line */

        app = docker.build("hojax/hellonode_jenkins")
    }

    stage('Test Image') {
        /* Ideeally, we would run a test frameowkr against our image
         * This runs only a single dummy test inside the image. */
        app.inside {
            sh 'npm test'
        }
    }

    stage('Push Image') {
        /* Finally, we'll push the image with two tags
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused */
        
        docker.withRegistery('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}