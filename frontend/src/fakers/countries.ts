import _ from "lodash";

export interface Country {
  name: string;
  image: string;
}

 const imageAssets =[''] //import.meta.glob<{
//   default: string;
// }>("/src/assets/images/flags/*.{jpg,jpeg,png,svg}", { eager: true });

const fakers = {
  fakeCountries() {
    const countries: Array<Country> = [
      {
        name: "French Polynesia",
        image: imageAssets["/src/assets/images/flags/pf.svg"],
      },
      {
        name: "Saint Martin",
        image: imageAssets["/src/assets/images/flags/mf.svg"],
      },
      {
        name: "Venezuela",
        image: imageAssets["/src/assets/images/flags/ve.svg"],
      },
      {
        name: "Réunion",
        image: imageAssets["/src/assets/images/flags/re.svg"],
      },
      {
        name: "El Salvador",
        image: imageAssets["/src/assets/images/flags/sv.svg"],
      },
      {
        name: "Dominica",
        image: imageAssets["/src/assets/images/flags/dm.svg"],
      },
      {
        name: "Gibraltar",
        image: imageAssets["/src/assets/images/flags/gi.svg"],
      },
      {
        name: "Kenya",
        image: imageAssets["/src/assets/images/flags/ke.svg"],
      },
      {
        name: "Brazil",
        image: imageAssets["/src/assets/images/flags/br.svg"],
      },
      {
        name: "Maldives",
        image: imageAssets["/src/assets/images/flags/mv.svg"],
      },
      {
        name: "United States",
        image: imageAssets["/src/assets/images/flags/us.svg"],
      },
      {
        name: "Cook Islands",
        image: imageAssets["/src/assets/images/flags/ck.svg"],
      },
      {
        name: "Niue",
        image: imageAssets["/src/assets/images/flags/nu.svg"],
      },
      {
        name: "Seychelles",
        image: imageAssets["/src/assets/images/flags/sc.svg"],
      },
      {
        name: "Central African Republic",
        image: imageAssets["/src/assets/images/flags/cf.svg"],
      },
      {
        name: "Tokelau",
        image: imageAssets["/src/assets/images/flags/tk.svg"],
      },
      {
        name: "Vanuatu",
        image: imageAssets["/src/assets/images/flags/vu.svg"],
      },
      {
        name: "Gambia",
        image: imageAssets["/src/assets/images/flags/gm.svg"],
      },
      {
        name: "Guyana",
        image: imageAssets["/src/assets/images/flags/gy.svg"],
      },
      {
        name: "Falkland Islands",
        image: imageAssets["/src/assets/images/flags/fk.svg"],
      },
      {
        name: "Belgium",
        image: imageAssets["/src/assets/images/flags/be.svg"],
      },
      {
        name: "Western Sahara",
        image: imageAssets["/src/assets/images/flags/eh.svg"],
      },
      {
        name: "Turkey",
        image: imageAssets["/src/assets/images/flags/tr.svg"],
      },
      {
        name: "Saint Vincent and the Grenadines",
        image: imageAssets["/src/assets/images/flags/vc.svg"],
      },
      {
        name: "Pakistan",
        image: imageAssets["/src/assets/images/flags/pk.svg"],
      },
      {
        name: "Åland Islands",
        image: imageAssets["/src/assets/images/flags/ax.svg"],
      },
      {
        name: "Iran",
        image: imageAssets["/src/assets/images/flags/ir.svg"],
      },
      {
        name: "Indonesia",
        image: imageAssets["/src/assets/images/flags/id.svg"],
      },
      {
        name: "New Zealand",
        image: imageAssets["/src/assets/images/flags/nz.svg"],
      },
      {
        name: "Afghanistan",
        image:
          imageAssets["/src/assets/images/flags/Flag_of_the_Taliban.svg"]
            ,
      },
      {
        name: "Guam",
        image: imageAssets["/src/assets/images/flags/gu.svg"],
      },
      {
        name: "Albania",
        image: imageAssets["/src/assets/images/flags/al.svg"],
      },
      {
        name: "DR Congo",
        image: imageAssets["/src/assets/images/flags/cd.svg"],
      },
      {
        name: "Ivory Coast",
        image: imageAssets["/src/assets/images/flags/ci.svg"],
      },
      {
        name: "Sudan",
        image: imageAssets["/src/assets/images/flags/sd.svg"],
      },
      {
        name: "Timor-Leste",
        image: imageAssets["/src/assets/images/flags/tl.svg"],
      },
      {
        name: "Luxembourg",
        image: imageAssets["/src/assets/images/flags/lu.svg"],
      },
      {
        name: "Saudi Arabia",
        image: imageAssets["/src/assets/images/flags/sa.svg"],
      },
      {
        name: "Cambodia",
        image: imageAssets["/src/assets/images/flags/kh.svg"],
      },
      {
        name: "Nepal",
        image: imageAssets["/src/assets/images/flags/np.svg"],
      },
      {
        name: "French Guiana",
        image: imageAssets["/src/assets/images/flags/gf.svg"],
      },
      {
        name: "Malaysia",
        image: imageAssets["/src/assets/images/flags/my.svg"],
      },
      {
        name: "Rwanda",
        image: imageAssets["/src/assets/images/flags/rw.svg"],
      },
      {
        name: "Thailand",
        image: imageAssets["/src/assets/images/flags/th.svg"],
      },
      {
        name: "Antarctica",
        image: imageAssets["/src/assets/images/flags/aq.svg"],
      },
      {
        name: "Jordan",
        image: imageAssets["/src/assets/images/flags/jo.svg"],
      },
      {
        name: "Switzerland",
        image: imageAssets["/src/assets/images/flags/ch.svg"],
      },
      {
        name: "Comoros",
        image: imageAssets["/src/assets/images/flags/km.svg"],
      },
      {
        name: "Kosovo",
        image: imageAssets["/src/assets/images/flags/xk.svg"],
      },
      {
        name: "Isle of Man",
        image: imageAssets["/src/assets/images/flags/im.svg"],
      },
      {
        name: "Montenegro",
        image: imageAssets["/src/assets/images/flags/me.svg"],
      },
      {
        name: "Hong Kong",
        image: imageAssets["/src/assets/images/flags/hk.svg"],
      },
      {
        name: "Jersey",
        image: imageAssets["/src/assets/images/flags/je.svg"],
      },
      {
        name: "Tajikistan",
        image: imageAssets["/src/assets/images/flags/tj.svg"],
      },
      {
        name: "Bulgaria",
        image: imageAssets["/src/assets/images/flags/bg.svg"],
      },
      {
        name: "Egypt",
        image: imageAssets["/src/assets/images/flags/eg.svg"],
      },
      {
        name: "Malawi",
        image: imageAssets["/src/assets/images/flags/mw.svg"],
      },
      {
        name: "Cape Verde",
        image: imageAssets["/src/assets/images/flags/cv.svg"],
      },
      {
        name: "Benin",
        image: imageAssets["/src/assets/images/flags/bj.svg"],
      },
      {
        name: "Morocco",
        image: imageAssets["/src/assets/images/flags/ma.svg"],
      },
      {
        name: "Ireland",
        image: imageAssets["/src/assets/images/flags/ie.svg"],
      },
      {
        name: "Moldova",
        image: imageAssets["/src/assets/images/flags/md.svg"],
      },
      {
        name: "Denmark",
        image: imageAssets["/src/assets/images/flags/dk.svg"],
      },
      {
        name: "Turkmenistan",
        image: imageAssets["/src/assets/images/flags/tm.svg"],
      },
      {
        name: "Micronesia",
        image: imageAssets["/src/assets/images/flags/fm.svg"],
      },
      {
        name: "Monaco",
        image: imageAssets["/src/assets/images/flags/mc.svg"],
      },
      {
        name: "Barbados",
        image: imageAssets["/src/assets/images/flags/bb.svg"],
      },
      {
        name: "Algeria",
        image: imageAssets["/src/assets/images/flags/dz.svg"],
      },
      {
        name: "French Southern and Antarctic Lands",
        image: imageAssets["/src/assets/images/flags/tf.svg"],
      },
      {
        name: "Eritrea",
        image: imageAssets["/src/assets/images/flags/er.svg"],
      },
      {
        name: "Lesotho",
        image: imageAssets["/src/assets/images/flags/ls.svg"],
      },
      {
        name: "Tanzania",
        image: imageAssets["/src/assets/images/flags/tz.svg"],
      },
      {
        name: "Mali",
        image: imageAssets["/src/assets/images/flags/ml.svg"],
      },
      {
        name: "Niger",
        image: imageAssets["/src/assets/images/flags/ne.svg"],
      },
      {
        name: "Andorra",
        image: imageAssets["/src/assets/images/flags/ad.svg"],
      },
      {
        name: "United Kingdom",
        image: imageAssets["/src/assets/images/flags/gb.svg"],
      },
      {
        name: "Germany",
        image: imageAssets["/src/assets/images/flags/de.svg"],
      },
      {
        name: "United States Virgin Islands",
        image: imageAssets["/src/assets/images/flags/vi.svg"],
      },
      {
        name: "Somalia",
        image: imageAssets["/src/assets/images/flags/so.svg"],
      },
      {
        name: "Sint Maarten",
        image: imageAssets["/src/assets/images/flags/sx.svg"],
      },
      {
        name: "Cameroon",
        image: imageAssets["/src/assets/images/flags/cm.svg"],
      },
      {
        name: "Dominican Republic",
        image: imageAssets["/src/assets/images/flags/do.svg"],
      },
      {
        name: "Guinea",
        image: imageAssets["/src/assets/images/flags/gn.svg"],
      },
      {
        name: "Namibia",
        image: imageAssets["/src/assets/images/flags/na.svg"],
      },
      {
        name: "Montserrat",
        image: imageAssets["/src/assets/images/flags/ms.svg"],
      },
      {
        name: "South Georgia",
        image: imageAssets["/src/assets/images/flags/gs.svg"],
      },
      {
        name: "Senegal",
        image: imageAssets["/src/assets/images/flags/sn.svg"],
      },
      {
        name: "Bouvet Island",
        image: imageAssets["/src/assets/images/flags/bv.svg"],
      },
      {
        name: "Solomon Islands",
        image: imageAssets["/src/assets/images/flags/sb.svg"],
      },
      {
        name: "France",
        image: imageAssets["/src/assets/images/flags/fr.svg"],
      },
      {
        name: "Saint Helena, Ascension and Tristan da Cunha",
        image: imageAssets["/src/assets/images/flags/sh.svg"],
      },
      {
        name: "Macau",
        image: imageAssets["/src/assets/images/flags/mo.svg"],
      },
      {
        name: "Argentina",
        image: imageAssets["/src/assets/images/flags/ar.svg"],
      },
      {
        name: "Bosnia and Herzegovina",
        image: imageAssets["/src/assets/images/flags/ba.svg"],
      },
      {
        name: "Anguilla",
        image: imageAssets["/src/assets/images/flags/ai.svg"],
      },
      {
        name: "Guernsey",
        image: imageAssets["/src/assets/images/flags/gg.svg"],
      },
      {
        name: "Djibouti",
        image: imageAssets["/src/assets/images/flags/dj.svg"],
      },
      {
        name: "Saint Kitts and Nevis",
        image: imageAssets["/src/assets/images/flags/kn.svg"],
      },
      {
        name: "Syria",
        image: imageAssets["/src/assets/images/flags/sy.svg"],
      },
      {
        name: "Puerto Rico",
        image: imageAssets["/src/assets/images/flags/pr.svg"],
      },
      {
        name: "Peru",
        image: imageAssets["/src/assets/images/flags/pe.svg"],
      },
      {
        name: "San Marino",
        image: imageAssets["/src/assets/images/flags/sm.svg"],
      },
      {
        name: "Australia",
        image: imageAssets["/src/assets/images/flags/au.svg"],
      },
      {
        name: "New Caledonia",
        image: imageAssets["/src/assets/images/flags/nc.svg"],
      },
      {
        name: "Jamaica",
        image: imageAssets["/src/assets/images/flags/jm.svg"],
      },
      {
        name: "Kazakhstan",
        image: imageAssets["/src/assets/images/flags/kz.svg"],
      },
      {
        name: "Sierra Leone",
        image: imageAssets["/src/assets/images/flags/sl.svg"],
      },
      {
        name: "Palau",
        image: imageAssets["/src/assets/images/flags/pw.svg"],
      },
      {
        name: "South Korea",
        image: imageAssets["/src/assets/images/flags/kr.svg"],
      },
      {
        name: "Saint Pierre and Miquelon",
        image: imageAssets["/src/assets/images/flags/pm.svg"],
      },
      {
        name: "Belize",
        image: imageAssets["/src/assets/images/flags/bz.svg"],
      },
      {
        name: "Papua New Guinea",
        image: imageAssets["/src/assets/images/flags/pg.svg"],
      },
      {
        name: "Iceland",
        image: imageAssets["/src/assets/images/flags/is.svg"],
      },
      {
        name: "American Samoa",
        image: imageAssets["/src/assets/images/flags/as.svg"],
      },
      {
        name: "Burkina Faso",
        image: imageAssets["/src/assets/images/flags/bf.svg"],
      },
      {
        name: "Portugal",
        image: imageAssets["/src/assets/images/flags/pt.svg"],
      },
      {
        name: "Taiwan",
        image: imageAssets["/src/assets/images/flags/tw.svg"],
      },
      {
        name: "Japan",
        image: imageAssets["/src/assets/images/flags/jp.svg"],
      },
      {
        name: "China",
        image: imageAssets["/src/assets/images/flags/cn.svg"],
      },
      {
        name: "Lebanon",
        image: imageAssets["/src/assets/images/flags/lb.svg"],
      },
      {
        name: "Sri Lanka",
        image: imageAssets["/src/assets/images/flags/lk.svg"],
      },
      {
        name: "Guatemala",
        image: imageAssets["/src/assets/images/flags/gt.svg"],
      },
      {
        name: "Serbia",
        image: imageAssets["/src/assets/images/flags/rs.svg"],
      },
      {
        name: "Madagascar",
        image: imageAssets["/src/assets/images/flags/mg.svg"],
      },
      {
        name: "Eswatini",
        image: imageAssets["/src/assets/images/flags/sz.svg"],
      },
      {
        name: "Romania",
        image: imageAssets["/src/assets/images/flags/ro.svg"],
      },
      {
        name: "Antigua and Barbuda",
        image: imageAssets["/src/assets/images/flags/ag.svg"],
      },
      {
        name: "Curaçao",
        image: imageAssets["/src/assets/images/flags/cw.svg"],
      },
      {
        name: "Zambia",
        image: imageAssets["/src/assets/images/flags/zm.svg"],
      },
      {
        name: "Zimbabwe",
        image: imageAssets["/src/assets/images/flags/zw.svg"],
      },
      {
        name: "Tunisia",
        image: imageAssets["/src/assets/images/flags/tn.svg"],
      },
      {
        name: "United Arab Emirates",
        image: imageAssets["/src/assets/images/flags/ae.svg"],
      },
      {
        name: "Mongolia",
        image: imageAssets["/src/assets/images/flags/mn.svg"],
      },
      {
        name: "Norway",
        image: imageAssets["/src/assets/images/flags/no.svg"],
      },
      {
        name: "Greenland",
        image: imageAssets["/src/assets/images/flags/gl.svg"],
      },
      {
        name: "Uruguay",
        image: imageAssets["/src/assets/images/flags/uy.svg"],
      },
      {
        name: "Bahamas",
        image: imageAssets["/src/assets/images/flags/bs.svg"],
      },
      {
        name: "Russia",
        image: imageAssets["/src/assets/images/flags/ru.svg"],
      },
      {
        name: "British Virgin Islands",
        image: imageAssets["/src/assets/images/flags/vg.svg"],
      },
      {
        name: "Wallis and Futuna",
        image: imageAssets["/src/assets/images/flags/wf.svg"],
      },
      {
        name: "Chad",
        image: imageAssets["/src/assets/images/flags/td.svg"],
      },
      {
        name: "Saint Lucia",
        image: imageAssets["/src/assets/images/flags/lc.svg"],
      },
      {
        name: "Yemen",
        image: imageAssets["/src/assets/images/flags/ye.svg"],
      },
      {
        name: "United States Minor Outlying Islands",
        image: imageAssets["/src/assets/images/flags/um.svg"],
      },
      {
        name: "Sweden",
        image: imageAssets["/src/assets/images/flags/se.svg"],
      },
      {
        name: "Svalbard and Jan Mayen",
        image: imageAssets["/src/assets/images/flags/sj.svg"],
      },
      {
        name: "Laos",
        image: imageAssets["/src/assets/images/flags/la.svg"],
      },
      {
        name: "Latvia",
        image: imageAssets["/src/assets/images/flags/lv.svg"],
      },
      {
        name: "Colombia",
        image: imageAssets["/src/assets/images/flags/co.svg"],
      },
      {
        name: "Grenada",
        image: imageAssets["/src/assets/images/flags/gd.svg"],
      },
      {
        name: "Saint Barthélemy",
        image: imageAssets["/src/assets/images/flags/bl.svg"],
      },
      {
        name: "Canada",
        image: imageAssets["/src/assets/images/flags/ca.svg"],
      },
      {
        name: "Heard Island and McDonald Islands",
        image: imageAssets["/src/assets/images/flags/hm.svg"],
      },
      {
        name: "India",
        image: imageAssets["/src/assets/images/flags/in.svg"],
      },
      {
        name: "Guinea-Bissau",
        image: imageAssets["/src/assets/images/flags/gw.svg"],
      },
      {
        name: "North Macedonia",
        image: imageAssets["/src/assets/images/flags/mk.svg"],
      },
      {
        name: "Paraguay",
        image: imageAssets["/src/assets/images/flags/py.svg"],
      },
      {
        name: "Croatia",
        image: imageAssets["/src/assets/images/flags/hr.svg"],
      },
      {
        name: "Costa Rica",
        image: imageAssets["/src/assets/images/flags/cr.svg"],
      },
      {
        name: "Uganda",
        image: imageAssets["/src/assets/images/flags/ug.svg"],
      },
      {
        name: "Caribbean Netherlands",
        image: imageAssets["/src/assets/images/flags/bq.svg"],
      },
      {
        name: "Bolivia",
        image: imageAssets["/src/assets/images/flags/bo.svg"],
      },
      {
        name: "Togo",
        image: imageAssets["/src/assets/images/flags/tg.svg"],
      },
      {
        name: "Mayotte",
        image: imageAssets["/src/assets/images/flags/yt.svg"],
      },
      {
        name: "Marshall Islands",
        image: imageAssets["/src/assets/images/flags/mh.svg"],
      },
      {
        name: "North Korea",
        image: imageAssets["/src/assets/images/flags/kp.svg"],
      },
      {
        name: "Netherlands",
        image: imageAssets["/src/assets/images/flags/nl.svg"],
      },
      {
        name: "British Indian Ocean Territory",
        image: imageAssets["/src/assets/images/flags/io.svg"],
      },
      {
        name: "Malta",
        image: imageAssets["/src/assets/images/flags/mt.svg"],
      },
      {
        name: "Mauritius",
        image: imageAssets["/src/assets/images/flags/mu.svg"],
      },
      {
        name: "Norfolk Island",
        image: imageAssets["/src/assets/images/flags/nf.svg"],
      },
      {
        name: "Honduras",
        image: imageAssets["/src/assets/images/flags/hn.svg"],
      },
      {
        name: "Spain",
        image: imageAssets["/src/assets/images/flags/es.svg"],
      },
      {
        name: "Estonia",
        image: imageAssets["/src/assets/images/flags/ee.svg"],
      },
      {
        name: "Kyrgyzstan",
        image: imageAssets["/src/assets/images/flags/kg.svg"],
      },
      {
        name: "Chile",
        image: imageAssets["/src/assets/images/flags/cl.svg"],
      },
      {
        name: "Bermuda",
        image: imageAssets["/src/assets/images/flags/bm.svg"],
      },
      {
        name: "Equatorial Guinea",
        image: imageAssets["/src/assets/images/flags/gq.svg"],
      },
      {
        name: "Liberia",
        image: imageAssets["/src/assets/images/flags/lr.svg"],
      },
      {
        name: "Pitcairn Islands",
        image: imageAssets["/src/assets/images/flags/pn.svg"],
      },
      {
        name: "Libya",
        image: imageAssets["/src/assets/images/flags/ly.svg"],
      },
      {
        name: "Liechtenstein",
        image: imageAssets["/src/assets/images/flags/li.svg"],
      },
      {
        name: "Vatican City",
        image: imageAssets["/src/assets/images/flags/va.svg"],
      },
      {
        name: "Christmas Island",
        image: imageAssets["/src/assets/images/flags/cx.svg"],
      },
      {
        name: "Oman",
        image: imageAssets["/src/assets/images/flags/om.svg"],
      },
      {
        name: "Philippines",
        image: imageAssets["/src/assets/images/flags/ph.svg"],
      },
      {
        name: "Poland",
        image: imageAssets["/src/assets/images/flags/pl.svg"],
      },
      {
        name: "Faroe Islands",
        image: imageAssets["/src/assets/images/flags/fo.svg"],
      },
      {
        name: "Bahrain",
        image: imageAssets["/src/assets/images/flags/bh.svg"],
      },
      {
        name: "Belarus",
        image: imageAssets["/src/assets/images/flags/by.svg"],
      },
      {
        name: "Slovenia",
        image: imageAssets["/src/assets/images/flags/si.svg"],
      },
      {
        name: "Guadeloupe",
        image: imageAssets["/src/assets/images/flags/gp.svg"],
      },
      {
        name: "Qatar",
        image: imageAssets["/src/assets/images/flags/qa.svg"],
      },
      {
        name: "Vietnam",
        image: imageAssets["/src/assets/images/flags/vn.svg"],
      },
      {
        name: "Mauritania",
        image: imageAssets["/src/assets/images/flags/mr.svg"],
      },
      {
        name: "Singapore",
        image: imageAssets["/src/assets/images/flags/sg.svg"],
      },
      {
        name: "Georgia",
        image: imageAssets["/src/assets/images/flags/ge.svg"],
      },
      {
        name: "Burundi",
        image: imageAssets["/src/assets/images/flags/bi.svg"],
      },
      {
        name: "Nauru",
        image: imageAssets["/src/assets/images/flags/nr.svg"],
      },
      {
        name: "South Sudan",
        image: imageAssets["/src/assets/images/flags/ss.svg"],
      },
      {
        name: "Samoa",
        image: imageAssets["/src/assets/images/flags/ws.svg"],
      },
      {
        name: "Cocos (Keeling) Islands",
        image: imageAssets["/src/assets/images/flags/cc.svg"],
      },
      {
        name: "Republic of the Congo",
        image: imageAssets["/src/assets/images/flags/cg.svg"],
      },
      {
        name: "Cyprus",
        image: imageAssets["/src/assets/images/flags/cy.svg"],
      },
      {
        name: "Kuwait",
        image: imageAssets["/src/assets/images/flags/kw.svg"],
      },
      {
        name: "Trinidad and Tobago",
        image: imageAssets["/src/assets/images/flags/tt.svg"],
      },
      {
        name: "Tuvalu",
        image: imageAssets["/src/assets/images/flags/tv.svg"],
      },
      {
        name: "Angola",
        image: imageAssets["/src/assets/images/flags/ao.svg"],
      },
      {
        name: "Tonga",
        image: imageAssets["/src/assets/images/flags/to.svg"],
      },
      {
        name: "Greece",
        image: imageAssets["/src/assets/images/flags/gr.svg"],
      },
      {
        name: "Mozambique",
        image: imageAssets["/src/assets/images/flags/mz.svg"],
      },
      {
        name: "Myanmar",
        image: imageAssets["/src/assets/images/flags/mm.svg"],
      },
      {
        name: "Austria",
        image: imageAssets["/src/assets/images/flags/at.svg"],
      },
      {
        name: "Ethiopia",
        image: imageAssets["/src/assets/images/flags/et.svg"],
      },
      {
        name: "Martinique",
        image: imageAssets["/src/assets/images/flags/mq.svg"],
      },
      {
        name: "Azerbaijan",
        image: imageAssets["/src/assets/images/flags/az.svg"],
      },
      {
        name: "Uzbekistan",
        image: imageAssets["/src/assets/images/flags/uz.svg"],
      },
      {
        name: "Bangladesh",
        image: imageAssets["/src/assets/images/flags/bd.svg"],
      },
      {
        name: "Armenia",
        image: imageAssets["/src/assets/images/flags/am.svg"],
      },
      {
        name: "Nigeria",
        image: imageAssets["/src/assets/images/flags/ng.svg"],
      },
      {
        name: "South Africa",
        image: imageAssets["/src/assets/images/flags/za.svg"],
      },
      {
        name: "Brunei",
        image: imageAssets["/src/assets/images/flags/bn.svg"],
      },
      {
        name: "Italy",
        image: imageAssets["/src/assets/images/flags/it.svg"],
      },
      {
        name: "Finland",
        image: imageAssets["/src/assets/images/flags/fi.svg"],
      },
      {
        name: "Israel",
        image: imageAssets["/src/assets/images/flags/il.svg"],
      },
      {
        name: "Aruba",
        image: imageAssets["/src/assets/images/flags/aw.svg"],
      },
      {
        name: "Nicaragua",
        image: imageAssets["/src/assets/images/flags/ni.svg"],
      },
      {
        name: "Haiti",
        image: imageAssets["/src/assets/images/flags/ht.svg"],
      },
      {
        name: "Kiribati",
        image: imageAssets["/src/assets/images/flags/ki.svg"],
      },
      {
        name: "Turks and Caicos Islands",
        image: imageAssets["/src/assets/images/flags/tc.svg"],
      },
      {
        name: "Cayman Islands",
        image: imageAssets["/src/assets/images/flags/ky.svg"],
      },
      {
        name: "Ukraine",
        image: imageAssets["/src/assets/images/flags/ua.svg"],
      },
      {
        name: "Mexico",
        image: imageAssets["/src/assets/images/flags/mx.svg"],
      },
      {
        name: "Palestine",
        image: imageAssets["/src/assets/images/flags/ps.svg"],
      },
      {
        name: "Fiji",
        image: imageAssets["/src/assets/images/flags/fj.svg"],
      },
      {
        name: "Slovakia",
        image: imageAssets["/src/assets/images/flags/sk.svg"],
      },
      {
        name: "Ghana",
        image: imageAssets["/src/assets/images/flags/gh.svg"],
      },
      {
        name: "Suriname",
        image: imageAssets["/src/assets/images/flags/sr.svg"],
      },
      {
        name: "Cuba",
        image: imageAssets["/src/assets/images/flags/cu.svg"],
      },
      {
        name: "Bhutan",
        image: imageAssets["/src/assets/images/flags/bt.svg"],
      },
      {
        name: "Hungary",
        image: imageAssets["/src/assets/images/flags/hu.svg"],
      },
      {
        name: "São Tomé and Príncipe",
        image: imageAssets["/src/assets/images/flags/st.svg"],
      },
      {
        name: "Iraq",
        image: imageAssets["/src/assets/images/flags/iq.svg"],
      },
      {
        name: "Czechia",
        image: imageAssets["/src/assets/images/flags/cz.svg"],
      },
      {
        name: "Lithuania",
        image: imageAssets["/src/assets/images/flags/lt.svg"],
      },
      {
        name: "Northern Mariana Islands",
        image: imageAssets["/src/assets/images/flags/mp.svg"],
      },
      {
        name: "Botswana",
        image: imageAssets["/src/assets/images/flags/bw.svg"],
      },
      {
        name: "Panama",
        image: imageAssets["/src/assets/images/flags/pa.svg"],
      },
      {
        name: "Gabon",
        image: imageAssets["/src/assets/images/flags/ga.svg"],
      },
      {
        name: "Ecuador",
        image: imageAssets["/src/assets/images/flags/ec.svg"],
      },
    ];

    return _.shuffle(countries);
  },
};

export default fakers;
