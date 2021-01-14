document.write( '<button class=\"hamburger hamburger--spring\" type=\"button\" id=\"menu-burger\" onclick=\"openNav()\">\n' );
document.write( '<span class=\"hamburger-box\">\n' );
document.write( '<span class=\"hamburger-inner\">\n' );
document.write( '</span>\n' );
document.write( '</span>\n' );
document.write( '</button>\n' );
document.write( '<div id=\"nav\" class=\"sidenav\">\n' );
document.write( '<a href=\"index.html\"> Home <br><span>This is the home page</span><span class=\"arrow\">→</span></a>\n' );
document.write( '<a href=\"dark-patterns.html\"> Dark Patterns <br><span>The dark side of the web</span><span class=\"arrow\">→</span></a>\n' );
document.write( '<a href=\"gamification.html\"> Gamification <br><span>The use of gaming elements in UI Design</span><span class=\"arrow\">→</span></a>\n' );
document.write( '<a href=\"cognitive-bias.html\"> Cognitive Bias in Design <br><span>A shortcut taken by our mind</span><span class=\"arrow\">→</span></a>\n' );
document.write( '<a href=\"rights-and-wrongs-online.html\"> Rights and wrongs of online activity <br><span>We are all capable of making decisions , what will you choose ?</span><span class=\"arrow\">→</span></a>\n' );
document.write( '<a href=\"digital-privacy.html\"> Digital privacy <br><span>How private your information is on the internet</span><span class=\"arrow\">→</span></a>\n' );
document.write( '<a href=\"solutionism.html\"> Solutionism <br><span>Solutionism is the idea that any problem can be solved through technology.</span><span class=\"arrow\">→</span></a>\n' );
document.write( '<a href=\"digital-accessibility.html\"> Digital Accessibility <br><span>Making computers and the web usable for all</span><span class=\"arrow\">→</span></a>\n' );
document.write('<a target=\"_blank\" href=\"https://github.com/IDAD-Y2/collective-design-psychology\" id=\"bottom\">Made collectively by Year 2 IDAD Students<br><span>Link to the GITHUB repository</span></a>')
document.write( '</div>' );

function openNav() {
    document.getElementById("menu-burger").classList.toggle("is-active");
    document.getElementById("nav").classList.toggle("show");
}
