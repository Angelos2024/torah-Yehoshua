const urls = [
  'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/escritos/Marcos.json',
  'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/escritos/Galatas.json',
  'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/escritos/Hebreos.json',
  'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/escritos/1_Tesalonicenses.json',
  'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/escritos/2_Tesalonicenses.json',
  'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/escritos/Romanos.json',
  'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/escritos/Apocalipsis.json',
];

// Definimos los libros disponibles para la versión RVR1960
const versionesBiblia = {
  RVR1960: {
    Mateo:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/mateo.json',
    Marcos:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/marcos.json',
    Lucas:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/lucas.json',
    Juan: 'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/juan.json',
    Hechos:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/hechos.json',
    Romanos:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/romanos.json',
    '1Corintios':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_corintios.json',
    '2Corintios':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_corintios.json',
    Gálatas:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/galatas.json',
    Efesios:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/efesios.json',
    Filipenses:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/filipenses.json',
    Colosenses:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/colosenses.json',
    '1Tesalonicenses':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_tesalonicenses.json',
    '2Tesalonicenses':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_tesalonicenses.json',
    '1Timoteo':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_timoteo.json',
    '2Timoteo':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_timoteo.json',
    Tito: 'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/tito.json',
    Filemon:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/filemon.json',
    Hebreos:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/hebreos.json',
    Santiago:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/santiago.json',
    '1Pedro':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_pedro.json',
    '2Pedro':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_pedro.json',
    '1Juan':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_juan.json',
    '2Juan':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_juan.json',
    '3Juan':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/3_juan.json',
    Judas:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/judas.json',
    Apocalipsis:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/apocalipsis.json',
  },
  Btx4: {
    Génesis:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/genesis.json',
    Exodo:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/exodo.json',
    Levitico:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/levitico.json',
    Numeros:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/numeros.json',
    Deuteronomios:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/deuteronomios.json',
    Josue:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/josue.json',
    Jueces:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/jueces.json',
    Rut: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/rut.json',
    '1Samuel':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1samuel.json',
    '2Samuel':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2samuel.json',
    '1Reyes':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1reyes.json',
    '2Reyes':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2reyes.json',
    Abdias:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/abdias.json',
    Joel: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/joel.json',
    Jonas:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/jonas.json',
    Amos: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/amos.json',
    Miqueas:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/miqueas.json',
    Oseas:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/oseas.json',
    Nahum:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/nahum.json',
    Isaias:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/isaias.json',
    Jeremias:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/jeremias.json',
    Lamentaciones:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/lamentaciones.json',
    Sofonias:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/sofonias.json',
    Habacuc:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/habacuc.json',
    Ezequiel:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/ezequiel.json',
    Daniel:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/daniel.json',
    Ester:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/ester.json',
    '1Cronicas':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1cronicas.json',
    '2Cronicas':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2cronicas.json',
    Esdras:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/esdras.json',
    Nehemias:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/nehemias.json',
    Hageo:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/hageo.json',
    Zacarias:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/zacarias.json',
    Malaquias:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/malaquias.json',
    Job: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/job.json',
    Salmos:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/salmos.json',
    Proverbios:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/proverbios.json',
    Eclesiastes:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/eclesiastes.json',
    Cantares:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/cantares.json',
    Juan: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/juan.json',
    Mateo:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/mateo.json',
    Marcos:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/marcos.json',
    Lucas:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/lucas.json',
    Hechos:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/hechos.json',
    Jacobo:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/jacobo.json',
    '1Pedro':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1pedro.json',
    '2Pedro':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2pedro.json',
    Judas:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/judas.json',
    '1Juan':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1juan.json',
    '2Juan':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2juan.json',
    '3Juan':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/3juan.json',
    Galatas:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/galatas.json',
    '1Tesalonicenses':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1tesalonicenses.json',
    '2Tesalonicenses':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2tesalonicenses.json',
    '1Corintios':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1corintios.json',
    '2Corintios':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2corintios.json',
    Romanos:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/romanos.json',
    Efesios:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/efesios.json',
    Filipenses:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/filipenses.json',
    Colosenses:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/colosenses.json',
    Hebreos:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/hebreos.json',
    Filemon:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/filemon.json',
    '1Timoteo':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1timoteo.json',
    '2Timoteo':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2timoteo.json',
    Tito: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/tito.json',
    Apocalipsis:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/apocalipsis.json',
  },
  Jubileos: {},
};

// 1) Mapa de URLs para cada versión y cada libro
//--------------------------------------------------------
const urlsLibros = {
  RVR1960: {
    Mateo:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/mateo.json',
    Marcos:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/marcos.json',
    Lucas:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/lucas.json',
    Juan: 'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/juan.json',
    Hechos:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/hechos.json',
    Romanos:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/romanos.json',
    '1Corintios':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_corintios.json',
    '2Corintios':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_corintios.json',
    Gálatas:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/galatas.json',
    Efesios:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/efesios.json',
    Filipenses:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/filipenses.json',
    Colosenses:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/colosenses.json',
    '1Tesalonicenses':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_tesalonicenses.json',
    '2Tesalonicenses':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_tesalonicenses.json',
    '1Timoteo':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_timoteo.json',
    '2Timoteo':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_timoteo.json',
    Tito: 'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/tito.json',
    Filemon:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/filemon.json',
    Hebreos:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/hebreos.json',
    Santiago:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/santiago.json',
    '1Pedro':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_pedro.json',
    '2Pedro':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_pedro.json',
    '1Juan':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/1_juan.json',
    '2Juan':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/2_juan.json',
    '3Juan':
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/3_juan.json',
    Judas:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/judas.json',
    Apocalipsis:
      'https://raw.githubusercontent.com/xtiam57/church-utils/refs/heads/main/dist/biblia/apocalipsis.json',
  },
  BTX4: {
    Génesis:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/genesis.json',
    Exodo:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/exodo.json',
    Levitico:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/levitico.json',
    Numeros:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/numeros.json',
    Deuteronomios:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/deuteronomios.json',
    Josue:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/josue.json',
    Jueces:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/jueces.json',
    Rut: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/rut.json',
    '1Samuel':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1samuel.json',
    '2Samuel':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2samuel.json',
    '1Reyes':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1reyes.json',
    '2Reyes':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2reyes.json',
    Abdias:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/abdias.json',
    Joel: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/joel.json',
    Jonas:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/jonas.json',
    Amos: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/amos.json',
    Miqueas:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/miqueas.json',
    Oseas:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/oseas.json',
    Nahum:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/nahum.json',
    Isaias:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/isaias.json',
    Jeremias:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/jeremias.json',
    Lamentaciones:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/lamentaciones.json',
    Sofonias:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/sofonias.json',
    Habacuc:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/habacuc.json',
    Ezequiel:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/ezequiel.json',
    Daniel:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/daniel.json',
    Ester:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/ester.json',
    '1Cronicas':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1cronicas.json',
    '2Cronicas':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2cronicas.json',
    Esdras:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/esdras.json',
    Nehemias:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/nehemias.json',
    Hageo:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/hageo.json',
    Zacarias:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/zacarias.json',
    Malaquias:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/malaquias.json',
    Job: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/job.json',
    Salmos:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/salmos.json',
    Proverbios:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/proverbios.json',
    Eclesiastes:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/eclesiastes.json',
    Cantares:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/cantares.json',
    Juan: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/juan.json',
    Mateo:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/mateo.json',
    Marcos:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/marcos.json',
    Lucas:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/lucas.json',
    Hechos:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/hechos.json',
    Jacobo:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/jacobo.json',
    '1Pedro':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1pedro.json',
    '2Pedro':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2pedro.json',
    Judas:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/judas.json',
    '1Juan':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1juan.json',
    '2Juan':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2juan.json',
    '3Juan':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/3juan.json',
    Galatas:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/galatas.json',
    '1Tesalonicenses':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1tesalonicenses.json',
    '2Tesalonicenses':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2tesalonicenses.json',
    '1Corintios':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1corintios.json',
    '2Corintios':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2corintios.json',
    Romanos:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/romanos.json',
    Efesios:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/efesios.json',
    Filipenses:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/filipenses.json',
    Colosenses:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/colosenses.json',
    Hebreos:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/hebreos.json',
    Filemon:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/filemon.json',
    '1Timoteo':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/1timoteo.json',
    '2Timoteo':
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/2timoteo.json',
    Tito: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/tito.json',
    Apocalipsis:
      'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/BTX4/apocalipsis.json',
  },
};

const comentariosURLs = {
  Gálatas: {
    1: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/comentarios_codigos/galatas/galatas1.html',
    2: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/comentarios_codigos/galatas/galatas2.html',
    3: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/comentarios_codigos/galatas/galatas3.html',
    4: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/comentarios_codigos/galatas/galatas4.html',
    5: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/comentarios_codigos/galatas/galatas5.html',
    6: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/main/comentarios_codigos/galatas/galatas6.html',
  },
  Hebreos: {
    1: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos1.html',
    2: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos2.html',
    3: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos3.html',
    4: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos4.html',
    5: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos5.html',
    6: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos6.html',
    7: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos7.html',
    8: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos8.html',
    9: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos9.html',
    10: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos10.html',
    11: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos11.html',
    12: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos12.html',
    13: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/hebreos/hebreos13.html',
  },
  '1Tesalonicenses': {
    1: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/1tesalonicenses/1tesa1.html',
    2: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/1tesalonicenses/1tesa2.html',
    3: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/1tesalonicenses/1tesa3.html',
    4: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/1tesalonicenses/1tesa4.html',
    5: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/1tesalonicenses/1tesa5.html',
  },
  '2Tesalonicenses': {
    1: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/2tesalonicenses/2tesa1.html',
    2: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/2tesalonicenses/2tesa2.html',
    3: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/2tesalonicenses/2tesa3.html',
  },
  Marcos: {
    1: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs1.html',
    3: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs3.html',
    4: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs4.html',
    5: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs5.html',
    6: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs6.html',
    7: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs7.html',
    8: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs8.html',
    9: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs9.html',
    10: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs10.html',
    11: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs11.html',
    12: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs12.html',
    13: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs13.html',
    14: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs14.html',
    15: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs15.html',
    16: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/marcos/mrcs16.html',
  },
  Romanos: {
    1: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom1.html',
    2: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom2.html',
    3: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom3.html',
    4: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom4.html',
    5: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom5.html',
    6: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom6.html',
    7: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom7.html',
    8: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom8.html',
    9: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom9.html',
    10: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom10.html',
    11: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom11.html',
    12: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom12.html',
    13: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom13.html',
    14: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom14.html',
    15: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom15.html',
    16: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/romanos/rom16.html',
  },
  Apocalipsis: {
    1: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc1.html',
    2: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc2.html',
    3: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc3.html',
    4: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc4.html',
    5: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc5.html',
    6: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc6.html',
    7: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc7.html',
    8: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc8.html',
    9: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc9.html',
    10: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc10.html',
    11: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc11.html',
    12: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc12.html',
    13: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc13.html',
    14: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc14.html',
    15: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc15.html',
    16: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc16.html',
    17: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc17.html',
    18: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc18.html',
    19: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc19.html',
    20: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc20.html',
    21: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc21.html',
    22: 'https://raw.githubusercontent.com/Angelos2024/torah-Yehoshua/refs/heads/main/comentarios_codigos/apocalipsis/apoc22.html',
  },
};

// Mapear abreviaturas a nombres completos
const libroMap = {
  gal: 'gálatas',
  Gal: 'Gálatas',
  heb: 'hebreos',
  Heb: 'Hebreos',
  '1 tes': '1Tesalonicenses',
  '1tes': '1Tesalonicenses',
  '1 tesa': '1Tesalonicenses',
  '1Tesa': '1Tesalonicenses',
  '1 tesalonicenses': '1Tesalonicenses',
  '2 tes': '2Tesalonicenses',
  '2tes': '2Tesalonicenses',
  '2 tesa': '2Tesalonicenses',
  '2Tesa': '2Tesalonicenses',
  '2 tesalonicenses': '2Tesalonicenses',
  Romanos: 'Romanos',
  romanos: 'Romanos',
  Rom: 'Romanos',
  rom: 'Romanos',
  ROMANOS: 'Romanos',
  ROM: 'Romanos',
  Marcos: 'Marcos',
  marcos: 'Marcos',
  MARCOS: 'Marcos',
  marc: 'Marcos',
  Mc: 'Marcos',
  Mar: 'Marcos',
  MAR: 'Marcos',
  mar: 'Marcos',
  Ap: 'Apocalipsis',
  ap: 'Apocalipsis',
  apocalipsis: 'Apocalipsis',
  APOCALIPSIS: 'Apocalipsis',
  Apoc: 'Apocalipsis',
  apoc: 'Apocalipsis',
  APOC: 'Apocalipsis',
  AP: 'Apocalipsis',
};
