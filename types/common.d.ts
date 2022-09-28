declare module "common" {
	interface Post {
		title: string;
		image: string;
		author: "Admin" | "User";
		createdAt: string | Date;
		content: string;
	}
}
