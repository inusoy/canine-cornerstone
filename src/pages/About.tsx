import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "@/components/ui/optimized-image";
import React from "react";
import { Link } from "react-router-dom";
import { teamMembers } from "@/data/team";

const About: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>O nas | Szczek Szczek - Zespół</title>
				<meta
					name="description"
					content="Poznaj zespół Szczek Szczek – Marta Stach i współpracowniczki wspierające opiekunów psów we Wrocławiu. Szkolenia, nosework, konsultacje behawioralne."
				/>
				<link rel="canonical" href="/about" />
				<meta property="og:title" content="O nas | Szczek Szczek" />
				<meta
					property="og:description"
					content="Poznaj zespół Szczek Szczek: założycielka Marta Stach oraz współpracowniczki."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="/about" />
			</Helmet>
			<Navigation />
			<main className="min-h-screen pt-24 pb-20">
				<div className="container mx-auto px-4 max-w-6xl">
					<header className="mb-14 text-center">
						<h1 className="text-4xl md:text-5xl font-semibold text-primary font-bryndan uppercase mb-4">
							O NAS
						</h1>
						{/* <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
							Zespół Szczek Szczek to pasja do psów, nauka komunikacji i wsparcie relacji człowiek–pies. Nasz skład będzie się rozwijał wraz z potrzebami Was i Waszych psów.
						</p> */}
					</header>

					<section aria-labelledby="team-heading" className="mt-6">
						<h2 id="team-heading" className="text-2xl font-semibold mb-8 uppercase tracking-wide text-primary">
							ZESPÓŁ
						</h2>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
							{teamMembers.map(member => (
								<Link key={member.id} to={`/about/${member.id}`} className="group focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-lg">
									<Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
										<div className="relative aspect-[4/4.8] w-full overflow-hidden">
											<OptimizedImage
												src={member.image}
												alt={member.name}
												className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
												width={600}
												height={800}
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
											<div className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground">
												<h3 className="text-lg font-semibold drop-shadow-sm font-bryndan">
													{member.name}
												</h3>
											</div>
										</div>
										<CardContent className="p-4 space-y-2 text-sm">
											<p className="text-muted-foreground uppercase tracking-wide text-xs font-medium">
												{member.role}
											</p>
											<span className="inline-block text-primary text-xs font-medium group-hover:underline">
												Zobacz profil →
											</span>
										</CardContent>
									</Card>
								</Link>
							))}
						</div>
						<p className="text-center text-muted-foreground text-sm mt-10">
							Zespół będzie się powiększał – kolejne osoby już wkrótce.
						</p>
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default About;

