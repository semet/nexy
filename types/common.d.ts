declare module "common" {
	interface Posts {
		title: string;
		image: string;
		author: "Admin" | "User";
		createdAt: string | Date;
		content: string;
	}
}
