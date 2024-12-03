export interface KoiFish{
    koiFishId:   string;
    category:    string;
    user:        string;
    fishName:    string;
    fishElement: string;
    size:        string;
    priceRange:  number;
    lifespan:    string;
    images:      Image[];
    colors:      Color[];
}

export interface Color {
    colorName: string;
}

export interface Image {
    imageUrl: string;
}