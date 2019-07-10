import web3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0x288b7662FF182A5ec37df5561B4d3192333C6821"

);

export default instance;
