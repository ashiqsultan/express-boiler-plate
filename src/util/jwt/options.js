module.exports = {
	issuer: 'MyExampleCorp', // Issuer
	subject: 'someuser@example.com', // Subject
	audience: 'http://example.com', // Audience
	expiresIn: '12h', // Time the JWT will be valid
	algorithm: 'HS256' // RSASSA [ "RS256", "RS384", "RS512" ]
};
