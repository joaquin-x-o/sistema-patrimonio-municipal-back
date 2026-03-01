export enum ProductCategory {
    // Básicos de oficina
    FURNITURE = 'FURNITURE',                     // Mesas, sillas, armarios
    IT = 'IT',                                   // PCs, monitores, servidores, impresoras
    OFFICE_EQUIPMENT = 'OFFICE_EQUIPMENT',       // Fotocopiadoras, destructoras, anilladoras (cosas que no son PC ni Mueble)
    
    // Tecnología específica
    ELECTRONICS = 'ELECTRONICS',                 // Proyectores, cámaras, radios, sonido (distinto de IT)
    
    // Trabajo pesado y mantenimiento
    TOOLS = 'TOOLS',                             // Taladros, martillos, herramientas de mano
    MACHINERY = 'MACHINERY',                     // Hormigoneras, motoguadañas, generadores
    VEHICLES = 'VEHICLES',                       // Camionetas, autos, motos, tractores
    
    // Deporte y Cultura
    SPORTS = 'SPORTS',                           // Pelotas, trofeos, arcos,etc
    CULTURE = 'CULTURE',                         // Instrumentos musicales, atriles, etc
    EDUCATION = 'EDUCATION',                     // Libros, mapas, material didáctico

    // Infraestructura y Edificio
    URBAN_ELEMENTS = 'URBAN_ELEMENTS',           // Bancos de plaza, luminarias de calle, señalética
    INSTALLATIONS = 'INSTALLATIONS',             // Aires acondicionados, estufas, bombas de agua 
    
    // Decoración
    TEXTILES = 'TEXTILES',                       // Cortinas, alfombras, banderas, etc
    ARTWORK = 'ARTWORK',                         // Estatuas, cuadros, etc

    // Varios
    SAFETY = 'SAFETY',                           // Matafuegos, EPP, botiquines, etc
    APPLIANCES = 'APPLIANCES',                   // Heladeras, microondas, cafeteras, etc
    KITCHENWARE = 'KITCHENWARE',                 // Platos, ollas, tenedores, cucharas, etc

    OTHER = 'OTHER'
}

export enum ProductCondition {
    NEW = 'NEW',
    EXCELLENT = 'EXCELLENT',
    GOOD = 'GOOD',
    REGULAR = 'REGULAR',
    BAD = 'BAD',
    BROKEN = 'BROKEN'
}

export enum ProductStatus {
    ACTIVE = 'ACTIVE',
    UNUSABLE = 'UNUSABLE',
    IN_REVIEW = 'IN_REVIEW',
    LOST = 'LOST',
    RETIRED = 'RETIRED',
}