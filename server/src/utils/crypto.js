import crypto from "crypto";
const getAesHex = (data, key) => {
    const cipher = crypto.createCipher("aes192", key)
    let aesHex = cipher.update(data, 'utf-8', 'hex')
    aesHex += cipher.final('hex');
    return aesHex;
}
const getDeAesUtf = (aes, key) => {
    const cipher = crypto.createDecipher("aes192", key)
    let deAes = cipher.update(aes, 'hex', 'utf-8')
    deAes += cipher.final('utf-8')
    return deAes;
}
export {
    getAesHex,
    getDeAesUtf
}