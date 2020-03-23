const automat = {
    przejscieNaLogowanieAdmina: document.getElementById("przejscieNaLogowanieAdmina"),
    client: document.getElementsByClassName('client'),
    payment: document.getElementsByClassName('payment'),
    payD1: document.getElementsByClassName('payD1'),
    payD2: document.getElementsByClassName('payD2'),
    loginAdmin: document.getElementsByClassName('loginAdmin'),
    admin: document.getElementsByClassName('admin'),
    adminD1: document.getElementsByClassName("adminD1"),
    adminD2: document.getElementsByClassName("adminD2"),
    adminD3: document.getElementsByClassName("adminD3"),
    adminD4: document.getElementsByClassName('adminD4'),
    adminD5: document.getElementsByClassName('adminD5'),
    adminD6: document.getElementsByClassName('adminD6'),
    mleko: 0,
    kawa: 0,
    iloscProduktow: 0,
    tablicaProduktow: [[], [], [], [], [], [], [], [], [], []],
    powtuzenie: 1,
    zaplata: 0,

    skladniki(kawa, mleko) {
        kawa = +kawa
        mleko = +mleko
        this.kawa += kawa;
        this.mleko += mleko;
    },





    przeNaAdm() {
        przejscieNaLogowanieAdmina.addEventListener('click', () => {
            this.client[0].style.display = "none";
            this.loginAdmin[0].style.display = "block";
            automat.logowanie();
        })
    },

    logowanie() {
        var Haslo = document.getElementById('haslo');
        var Login = document.getElementById('login')
        var buton = document.getElementById('przeslijLog');
        buton.addEventListener('click', () => {
            if (Login.value == "Admin" && Haslo.value == "Admin") {
                this.loginAdmin[0].style.display = "none";
                this.admin[0].style.display = "block";
                //automat.panelAdmina();
            } else {
                //this.loginAdmin[0].innerHTML = "Złe danne"
                alert('Złe dane')
                this.loginAdmin[0].style.display = "none";
                this.client[0].style.display = 'block';
            }
        })
    },

    panelAdmina() {
        var przejscieNaClient = document.getElementById('przejscieNaClient');
        przejscieNaClient.addEventListener('click', () => {
            this.client[0].style.display = "block";
            this.admin[0].style.display = "none";
        })
        var dodawanieProduktow = document.getElementById("dodawanieProduktow");
        dodawanieProduktow.addEventListener('click', () => {
            this.powtuzenie = 1;
            this.adminD1[0].style.display = "none";
            this.adminD2[0].style.display = "block";
            var potwierdzenieProduktu = document.getElementById('potwierdzenieProduktu');
            potwierdzenieProduktu.addEventListener('click', () => {
                var error = 0;
                if (!document.dodawanieProduktow.co.value) {
                    alert("Nie wypełniłeś pola 1!")
                    error++;
                }
                if (!document.dodawanieProduktow.cena.value) {
                    alert("Nie wypełniłeś pola 2!")
                    error++;
                }
                if (!document.dodawanieProduktow.kawa.value) {
                    alert("Nie wypełniłeś pola 3!")
                    error++;
                }
                if (!document.dodawanieProduktow.mleko.value) {
                    alert("Nie wypełniłeś pola 4!")
                    error++;
                }
                if (!error) {

                    this.adminD1[0].style.display = "block";
                    this.adminD2[0].style.display = "none";
                    automat.produkty(document.dodawanieProduktow.co.value, document.dodawanieProduktow.cena.value, document.dodawanieProduktow.kawa.value, document.dodawanieProduktow.mleko.value);

                }
            })
        });

        var wypisanieProduktow = document.getElementById('wypisanieProduktow');
        wypisanieProduktow.addEventListener('click', () => {
            var wypisanieProdwP = document.getElementById('wypisanieProdwP');
            this.adminD1[0].style.display = "none";
            this.adminD3[0].style.display = "block";
            wypisanieProdwP.innerHTML = ''
            for (var i = 0; i < this.iloscProduktow; i++) {
                for (var j = 0; j < this.tablicaProduktow[0].length; j++) {
                    wypisanieProdwP.innerHTML += this.tablicaProduktow[i][j] + '&nbsp'
                }
                wypisanieProdwP.innerHTML += '<br>'
            }
        })
        var zWypisDoAmd = document.getElementById('zWypisDoAmd');
        zWypisDoAmd.addEventListener('click', () => {
            this.adminD1[0].style.display = "block";
            this.adminD3[0].style.display = "none";
        })

        var dodawanieSkladnikow = document.getElementById('dodawanieSkladnikow');
        dodawanieSkladnikow.addEventListener('click', () => {
            this.powtuzenieSkl = 1;
            this.adminD1[0].style.display = "none";
            this.adminD4[0].style.display = "block";
            var potwierdzenieSkladnikow = document.getElementById('potwierdzenieSkladnikow')
            potwierdzenieSkladnikow.addEventListener('click', () => {
                var error = 0;
                if (!document.dodanieSkladnikow.oIloscKawy.value) {
                    alert("Nie wypełniłeś pola 1!")
                    error++;
                }
                if (!document.dodanieSkladnikow.oIloscMleka.value) {
                    alert("Nie wypełniłeś pola 2!")
                    error++;
                }
                if (!error) {
                    this.adminD1[0].style.display = "block";
                    this.adminD4[0].style.display = "none";
                    if (this.powtuzenieSkl == 1)
                        automat.skladniki(document.dodanieSkladnikow.oIloscKawy.value, document.dodanieSkladnikow.oIloscMleka.value);
                    this.powtuzenieSkl++;
                }

            })

        })

        var wypisanieSkladnikow = document.getElementById('wypisanieSkladnikow');
        wypisanieSkladnikow.addEventListener('click', () => {
            this.adminD1[0].style.display = "none";
            this.adminD5[0].style.display = "block";
            var wypisanieSkladwP = document.getElementById('wypisanieSkladwP');
            wypisanieSkladwP.innerHTML = "Ilość mleka: " + this.mleko + '<br>';
            wypisanieSkladwP.innerHTML += "Ilość Kawy:" + this.kawa + '<br>';
        })

        var zWypisaniaSkladnikowDoAdm = document.getElementById('zWypisaniaSkladnikowDoAdm');
        zWypisaniaSkladnikowDoAdm.addEventListener('click', () => {
            this.adminD1[0].style.display = "block";
            this.adminD5[0].style.display = "none";
        })

        var przejscieNaHistorie = document.getElementById('przejscieNaHistorie');
        przejscieNaHistorie.addEventListener('click', () => {
            this.adminD1[0].style.display = "none";
            this.adminD6[0].style.display = "block";

            var zHistoriiDoAdmina = document.getElementById('zHistoriiDoAdmina');
            zHistoriiDoAdmina.addEventListener('click', () => {
                this.adminD1[0].style.display = "block";
                this.adminD6[0].style.display = "none";
            })
        })
    },



    produkty(nazwa, cena, ilKawa, ilMleka) {

        if (this.iloscProduktow == 0) {
            this.tablicaProduktow = [
                ['Nazwa Produktu', 'Cena Produktu', 'Ilość Potrzebnej Kawy', 'Ilość Potrzebnego Mleka'],
                [], [], [], [], [], [], [], [], [],
            ];
            this.iloscProduktow++;
        };
        if (this.iloscProduktow > 0 && this.iloscProduktow < this.tablicaProduktow.length && this.powtuzenie == 1) {
            this.tablicaProduktow[this.iloscProduktow] = [nazwa, cena, ilKawa, ilMleka],
                //console.log(this.tablicaProduktow[this.iloscProduktow]);
                //console.log(this.iloscProduktow);
                automat.wpisanieProduktow(nazwa, cena);
            this.powtuzenie++;
            this.iloscProduktow++;
        }

        /*if(this.tablicaProduktow[this.iloscProduktow][1]) {
            console.log('zajete')
        } else {
            console.log('puste')
        }*/
    },


    wpisanieProduktow(name, cost) {
        var opcjeProdukty = document.getElementById('opcjeProdukty');
        opcjeProdukty.innerHTML += this.iloscProduktow + '.' + '&nbsp ' + name + '&nbsp ' + cost + 'zł' + '<br>'
    },



    panelClienta() {
        var produkt1 = document.getElementById('1');
        var produkt2 = document.getElementById('2');
        var produkt3 = document.getElementById('3');
        var produkt4 = document.getElementById('4');
        var produkt5 = document.getElementById('5');
        var produkt6 = document.getElementById('6');
        var produkt7 = document.getElementById('7');
        var produkt8 = document.getElementById('8');
        var produkt9 = document.getElementById('9');
        produkt1.addEventListener('click', () => {
            automat.platnosc(produkt1.id);
        })
        produkt2.addEventListener('click', () => {
            automat.platnosc(produkt2.id)
        })
        produkt3.addEventListener('click', () => {
            automat.platnosc(produkt3.id)
        })
        produkt4.addEventListener('click', () => {
            automat.platnosc(produkt4.id)
        })
        produkt5.addEventListener('click', () => {
            automat.platnosc(produkt5.id)
        })
        produkt6.addEventListener('click', () => {
            automat.platnosc(produkt6.id)
        })
        produkt7.addEventListener('click', () => {
            automat.platnosc(produkt7.id)
        })
        produkt8.addEventListener('click', () => {
            automat.platnosc(produkt8.id)
        })
        produkt9.addEventListener('click', () => {
            automat.platnosc(produkt9.id)
        })



        //automat.przeNaAdm();
    },

    platnosc(produkt) {

        var numerID = produkt;
        console.log(numerID);
        if (!this.tablicaProduktow[numerID][0]) {
            alert('nie ma produktu')
        } else {
            console.log('jest produkt')
            this.client[0].style.display = 'none'
            this.payment[0].style.display = 'block'
            this.zaplata = 0;
            sumaPlacy.innerHTML = ''
            var zaplata010 = document.getElementById('zaplata010');
            var zaplata020 = document.getElementById('zaplata020');
            var zaplata050 = document.getElementById('zaplata050');
            var zaplata1 = document.getElementById('zaplata1');
            var zaplata2 = document.getElementById('zaplata2');
            var zaplata5 = document.getElementById('zaplata5');
            var zaplata10 = document.getElementById('zaplata10');
            var zaplata20 = document.getElementById('zaplata20');
            var zaplata50 = document.getElementById('zaplata50');
            var zaplata100 = document.getElementById('zaplata100');
            var zaplata200 = document.getElementById('zaplata200');
            var zaplata500 = document.getElementById('zaplata500');
            zaplata010.onclick = () => {
                automat.zliczaniePlatnosci(2)
            }
            zaplata020.onclick = () => {
                automat.zliczaniePlatnosci(2)
            }
            zaplata050.onclick = () => {
                automat.zliczaniePlatnosci(2)
            }
            zaplata1.onclick = () => {
                automat.zliczaniePlatnosci(2)
            }
            zaplata2.onclick = () => {
                automat.zliczaniePlatnosci(2)
            }
            zaplata5.onclick = () => {
                automat.zliczaniePlatnosci(5)
            }
            zaplata10.onclick = () => {
                automat.zliczaniePlatnosci(10)
            }
            zaplata20.onclick = () => {
                automat.zliczaniePlatnosci(20)
            }
            zaplata50.onclick = () => {
                automat.zliczaniePlatnosci(50)
            }
            zaplata100.onclick = () => {
                automat.zliczaniePlatnosci(100)
            }
            zaplata200.onclick = () => {
                automat.zliczaniePlatnosci(200)
            }
            zaplata500.onclick = () => {
                automat.zliczaniePlatnosci(500)
            }
            var zaplataPotwierdzenie = document.getElementById('zaplataPotwierdzenie');
            zaplataPotwierdzenie.onclick = () => {
                if (this.zaplata > this.tablicaProduktow[numerID][1]) {
                    automat.pobranieSkladIDoHis(numerID);
                } else {
                    alert('za mało płacisz')
                }

            }


        }

    },
    zliczaniePlatnosci(ile) {
        this.zaplata = this.zaplata + ile;
        var sumaPlacy = document.getElementById('sumaPlacy');
        sumaPlacy.innerHTML = this.zaplata + 'Zł';
        console.log('wykonane')
    },

    pobranieSkladIDoHis(coTo) {
        console.log(this.tablicaProduktow[coTo][0]);
        if (this.mleko >= this.tablicaProduktow[coTo][3] && this.kawa >= this.tablicaProduktow[coTo][2]) {//2 - kawa  3-mleko
            this.mleko = this.mleko - this.tablicaProduktow[coTo][3];
            this.kawa = this.kawa - this.tablicaProduktow[coTo][2];
            automat.reszta(this.tablicaProduktow[coTo][1]);
            this.payD1[0].style.display = 'none';
            this.payD2[0].style.display = 'block';
            var historiaKupowania = document.getElementById('historiaKupowania');
            historiaKupowania.innerHTML += 'Kupiono: ' + this.tablicaProduktow[coTo][0] + " &nbsp koszt: " + this.tablicaProduktow[coTo][1];
            historiaKupowania.innerHTML += ' &nbsp data: ' + data.getDate() + '.' + (data.getMonth() + 1) + '.' + data.getFullYear() + ' &nbsp godzina: ' + data.getHours() + ':' + data.getMinutes();
            historiaKupowania.innerHTML += " &nbsp zapłacono: " + this.zaplata + " &nbsp reszta: " + (this.zaplata - this.tablicaProduktow[coTo][1]) + '<br>';
        } else {
            alert('za mała liczba składników do produkcji ' + this.tablicaProduktow[coTo][0])
            this.client[0].style.display = 'block';
            this.payment[0].style.display = 'none';
        }

    },

    reszta(koszt) {
        var bilon = [0.01, 0.02, 0.05, 0.10, 0.20, 0.50, 1, 2, 5, 10, 20, 50, 100, 200, 500];
        var ilosc = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var reszty = this.zaplata - koszt;
        for (let numer = bilon.length - 1; numer >= 0;) {
            if (bilon[numer] <= reszty) {
                reszty = reszty - bilon[numer];
                ilosc[numer] = ilosc[numer] + 1;
            } else {
                numer--;
            }
        }
        var payD2P2 = document.getElementById('payD2P2')
        payD2P2.innerHTML = ' ';
        for (let numer = ilosc.length - 1; numer >= 0; numer--) {
            if (ilosc[numer] > 0) {
                payD2P2.innerHTML += ilosc[numer] + 'x ' + bilon[numer] + '<br>';
            }
        }
        var powrutDoClienta = document.getElementById('powrutDoClienta');
        powrutDoClienta.addEventListener('click', () => {
            this.client[0].style.display = 'block';
            this.payment[0].style.display = 'none';
            this.payD1[0].style.display = 'block';
            this.payD2[0].style.display = 'none';
        })

    },




}
automat.panelClienta();
//dokończyć z odejmowaniem ilości mleka i td 'pobranieSkladIDoHis(coTo)'
automat.przeNaAdm();
automat.panelAdmina();
var data = new Date();
