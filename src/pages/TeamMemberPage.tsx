import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/ui/optimized-image';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getTeamMemberById } from '@/data/team';
import { Card, CardContent } from '@/components/ui/card';

const TeamMemberPage = () => {
  const { id } = useParams();
  const member = id ? getTeamMemberById(id) : undefined;

  if (!member) {
    return <Navigate to="/about" replace />;
  }

  const title = `${member.name} | Zespół Szczek Szczek`;
  const description = `${member.name} – ${member.role}. Poznaj profil członka zespołu Szczek Szczek.`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`/about/${member.id}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={`/about/${member.id}`} />
      </Helmet>
      <Navigation />
      <main className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-8 flex items-center gap-4 text-sm uppercase tracking-wide">
            <Link to="/about" className="text-primary hover:underline">← Wróć do zespołu</Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
            <div className="relative rounded-xl overflow-hidden border bg-card">
              <OptimizedImage
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover md:aspect-[4/5]"
                width={800}
                height={1000}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold font-bryndan uppercase text-primary mb-2">
                  {member.name}
                </h1>
                <p className="text-sm tracking-wide uppercase text-primary/80 font-medium">{member.role}</p>
              </div>
              <div className="space-y-4">
                {member.bio.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
              {member.experience?.length > 0 && (
                <>
                  <h3 className="text-2xl font-semibold text-primary font-bryndan uppercase">Doświadczenie</h3>
                  <div className="space-y-4">
                    {member.experience.map((p, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
                    ))}
                  </div>
                </>
              )}
              {member.credentialSections && member.credentialSections.length > 0 && (
                <div className="space-y-6">
                  {member.credentialSections.map(section => (
                    <Card key={section.title} className="bg-card/60">
                      <CardContent className="p-4">
                        <h2 className="text-sm font-semibold tracking-wide mb-3 uppercase">{section.title}</h2>
                        <ul className="text-sm space-y-2">
                          {section.items.map(item => (
                            <li key={item} className="flex gap-2 items-start">
                              <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                        {section.note && (
                          <p className="mt-4 text-xs text-muted-foreground italic">
                            {section.note}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Placeholder for future: related trainings, articles, etc. */}
          <div className="text-center text-muted-foreground text-sm">
            Więcej informacji i materiałów wkrótce.
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TeamMemberPage;
