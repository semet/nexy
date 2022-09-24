import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import AboutUsSection from "../components/home/AboutUsSection";
import ArticleSection from "../components/home/ArticleSection";
import FeatureSection from "../components/home/FeatureSection";
import ServiceSection from "../components/home/ServiceSection";
import TeamSection from "../components/home/TeamSection";
import TestimonialSection from "../components/home/TestimonialSection";
import Layout from "../components/Layout";

const Home: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Nexy</title>
			</Head>
			<Layout>
				{/* Feature Section */}
				<FeatureSection />
				{/* About Us */}
				<AboutUsSection />
				{/* Service */}
				<ServiceSection />
				{/* Team */}
				<TeamSection />
				{/* Testimonial */}
				<TestimonialSection />
				{/* Articles */}
				<ArticleSection />
			</Layout>
		</Fragment>
	);
};

export default Home;
