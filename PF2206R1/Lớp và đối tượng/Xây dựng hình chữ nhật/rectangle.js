class Rectangle{
    height;
    width;
    
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    getHeight(){
        return this.height;
    }

    getWidth(){
        return this.width;
    }

    setHeight(newHeight){
        this.height = newHeight;
    }

    setWidth(newWidth){
        this.width = newWidth;
    }

    getArea(){
        let area = this.height * this.width;
        return area;
    }

    getPerimeter(){
        let perimeter = this.height * 2 + this.width * 2;
        return perimeter;
    }
}