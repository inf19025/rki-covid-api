export interface IResponseMeta {
	meta: ResponseMeta;
}

export class ResponseMeta {
	source: string;
	contact: string;
	info: string;
	lastUpdate: Date;
	lastCheckedForUpdate: Date;

	constructor(lastUpdate: Date) {
		this.source = 'Robert Koch-Institut';
		this.contact = 'DashboardCrawler Team';
		this.info = '©2021 DashboardCrawler';
		this.lastUpdate = lastUpdate;
		this.lastCheckedForUpdate = new Date();
	}
}
