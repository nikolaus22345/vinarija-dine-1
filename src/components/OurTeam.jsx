import React from 'react';

const OurTeam = () => {
    const team = [
        { name: 'Marko Marković', role: 'Vlasnik i Podrumar', img: '' },
        { name: 'Petar Perić', role: 'Voditelj Vinograda', img: '' },
        { name: 'Ivan Ivić', role: 'Oslonac i Podrška', img: '' },
        { name: 'Jure Jurić', role: 'Prodaja na kućnom pragu', img: '' }
    ];

    return (
        <section className="section-padding text-center" id="team">
            <div className="container">
                <h2 className="section-title">NAŠ OBITELJSKI TRUD</h2>
                <div className="section-subtitle">Strastveni stručnjaci</div>
                <div className="team-grid">
                    {team.map((member, i) => (
                        <div key={i} className="team-member">
                            {member.img && <img src={member.img} alt={member.name} className="team-img" />}
                            <h4 className="team-name">{member.name}</h4>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
