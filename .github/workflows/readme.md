# Continuous deployment 

Changes committed to the `main` branch will be processed by a github action and then deployed to the server. Deploy to the server uses `rsync` over `ssh`. In order to prepare the keys:

1. Create a key pair `ssh-keygen -m PEM -t rsa -b 4096`
2. Upload private key as `secrets.SERVER_SSH_KEY` on github
3. Copy public key to server, e.g., using `ssh-copy-id` with username and host
