openssl genrsa -out key.pem 2048
openssl rsa -in key.pem -outform PEM -pubout -out public.pem
openssl x509 -inform DER -outform PEM -in server.crt -out cert.pem

cat server.crt server.key > key.pem