'use strict';

const Section = function(title, desc, img) {
    this.title = title;
    this.desc = desc;
    this.img = img;
}

Section.prototype.addToPage = function() {
    document.body.innerHTML = `<div class="section">
                                    <div class="row">
                                        <h2 class="title">${this.title}</h2>
                                        <div class="col">   
                                            <div class="description">
                                                <p>${this.desc}</p>
                                            </div>
                                            <div class="image">
                                                <img src=${this.img} alt="NoImg">
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
};

let firstSectionDesc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati numquam sit sed. Iste commodi laudantium sequi nihil aliquid officiis veritatis ullam vitae dolorum, magni, quam officia explicabo, sit quae.';

const firstSection = new Section('First Section', firstSectionDesc, './img/img1.png');

firstSection.addToPage();









