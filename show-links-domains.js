d = new Array();

function S() {
    with(open().document) {
        open();
        writeln(document.title + '<br /><br />');
        for (i = 0; D = d[i]; ++i) {
            writeln(D + '<br />');
    }
     writeln('<br />' + d.length + ' domain(s)');
			
    if (i > 1) {
		   writeln('<br />' + d.length + ' domains');
		}
    else {
       writeln('<br />' + d.length + ' domain');
    }
      close();
    }
}

function A(u) {
    if (u.indexOf('http') != 0) return;
    P = u.indexOf('://');
    if (P > 0) {
        u = u.substring(P + 3);
        P = u.indexOf('/');
        if (P > 0) {
            u = u.substring(0, P);
            F = false;
            for (j = 0; D = d[j]; ++j) {
                if (D == u) {
                    F = true;
                    break;
                }
            }
            if (!F) d[d.length] = u;
        }
    }
}
for (i = 0; L = document.links[i]; ++i) {
    A(L.href);
}
if (d.length == 0) {
    with(open().document) {
        open();
        writeln('<br />No domains found!');
        close();
    }
}
else S();
