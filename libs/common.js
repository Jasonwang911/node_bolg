const crypto = require('crypto');

module.expoort = {
	MD5_SUFFIX: 'sdfadfDFADFADFA_121$&^%&*!啊瞬间法律的类似阿里斯顿sdlfalsfasdfa',
	md5: function(str) {
		const obj = crypto.createHash('md5');
		obj.update(str);
		return obj.digest('hex');
	}
}