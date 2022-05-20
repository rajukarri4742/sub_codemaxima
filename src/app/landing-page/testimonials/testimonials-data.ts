import { Injectable } from '@angular/core';
export interface TestimonialRow{
    row:Testimonial[]
}
export interface Testimonial {
    name: string,
    role: string,
    company: string,
    profileImg: string,
    social: Social[],
    comment: string,
    background : string
}
export interface Social {
    socialMediaName: string,
    url: string
}
@Injectable({
    providedIn: 'root'
})
export class TestimonialsData {
    public testimonials :TestimonialRow[] = [
        {
            row:[
                {
                    company: "Wipro",
                    name: "Venkateswari",
                    profileImg: "assets/img/students/01psycho.JPG",
                    role: "Java Backend Developer",
                    background: "BTech- (CSE)",
                    comment: "It would be impossible to count all the ways that Rajendra helped me as a mentor and programming trainer in my career. Thank you so much for all that you have done.Thanks for being a good mentor and for guiding me on the right path. I will always be thankful to you.",
                    social: [
                        {
                            socialMediaName: "linkedin",
                            url: "https://www.linkedin.com/in/venkateswari-parimi-228990179/"
                        },
                        {
                            socialMediaName: "github",
                            url: "https://github.com/venkateswari05"
                        }
                    ]
                },
                {
                    company: "HCL",
                    name: "Swetha",
                    profileImg: "assets/img/students/02swetha.jpeg",
                    role: "Senior Software Engineer",
                    background: "BTech - (CSE)",
                    comment: `A mentor is someone who sees more talent and ability within you, than you see in your self, and
                    brings it out of you. This was true still I remember the day where I was not able to write even or
                    odd programs now capable of developing JAVA APIs. I can do nothing but to thank you Rajendra for all
                    your great efforts to guide me through correct path. you have been a great mentor always. Thank you
                    for your support, patience, and advice.`,
                    social: [
                        {
                            socialMediaName: "linkedin",
                            url: ""
                        },
                        {
                            socialMediaName: "github",
                            url: ""
                        }
                    ]
                },
                {
                    company: "IVY",
                    name: "Ravi Kiran",
                    profileImg: "assets/img/students/04ravi.jpeg",
                    role: "Software Engineer",
                    background: "BTech - (CSE)",
                    comment: `It would be impossible . Thank you so much for all that you have done.
                    Thanks for being a good mentor and for guiding me on the right path. I will always be thankful to
                    you.`,
                    social: [
                        {
                            socialMediaName: "linkedin",
                            url: ""
                        },
                        {
                            socialMediaName: "github",
                            url: ""
                        }
                    ]
                },
            ]
        },
        {
            row:[
                {
                    company: "TechMojo",
                    name: "Durgesh",
                    profileImg: "https://codingmentor22.github.io/assets/img/testimonials/testimonials-1.jpg",
                    role: "Member of Technical Staff - Java",
                    background: "BTech - (CSE)",
                    comment: `It would be impossible to count all the ways that Rajendra helped me as a mentor and programming
                    trainer in my career. Thank you so much for all that you have done.
                    Thanks for being a good mentor and for guiding me on the right path. I will always be thankful to
                    you.`,
                    social: [
                        {
                            socialMediaName: "linkedin",
                            url: ""
                        },
                        {
                            socialMediaName: "github",
                            url: ""
                        }
                    ]
                },
                {
                    company: "",
                    name: "Ahmad",
                    profileImg: "https://codingmentor22.github.io/assets/img/testimonials/testimonials-1.jpg",
                    role: "Software Engineer",
                    background: "BTech - (CSE)",
                    comment: `It would be impossible to count all the ways that Rajendra helped me as a mentor and programming
                    trainer in my career. Thank you so much for all that you have done.
                    Thanks for being a good mentor and for guiding me on the right path. I will always be thankful to
                    you.`,
                    social: [
                        {
                            socialMediaName: "linkedin",
                            url: ""
                        },
                        {
                            socialMediaName: "github",
                            url: ""
                        }
                    ]
                },
                {
                    company: "",
                    name: "Deepika",
                    profileImg: "https://codingmentor22.github.io/assets/img/testimonials/testimonials-1.jpg",
                    role: "Senior Software Engineer",
                    background: "BTech - (CSE)",
                    comment: `A mentor is someone who sees more talent and ability within you, than you see in your self, and
                    brings it out of you. This was true still I remember the day where I was not able to write even or
                    odd programs now capable of developing JAVA APIs. I can do nothing but to thank you Rajendra for all
                    your great efforts to guide me through correct path. you have been a great mentor always. Thank you
                    for your support, patience, and advice.`,
                    social: [
                        {
                            socialMediaName: "linkedin",
                            url: ""
                        },
                        {
                            socialMediaName: "github",
                            url: ""
                        }
                    ]
                },
            ]
        },
        {
            row:[
                {
                    company: "HCL",
                    name: "Swetha",
                    profileImg: "https://codingmentor22.github.io/assets/img/testimonials/testimonials-1.jpg",
                    role: "Senior Software Engineer",
                    background: "BTech - (CSE)",
                    comment: `A mentor is someone who sees more talent and ability within you, than you see in your self, and
                    brings it out of you. This was true still I remember the day where I was not able to write even or
                    odd programs now capable of developing JAVA APIs. I can do nothing but to thank you Rajendra for all
                    your great efforts to guide me through correct path. you have been a great mentor always. Thank you
                    for your support, patience, and advice.`,
                    social: [
                        {
                            socialMediaName: "linkedin",
                            url: ""
                        },
                        {
                            socialMediaName: "github",
                            url: ""
                        }
                    ]
                },
                {
                    company: "HCL",
                    name: "Swetha",
                    profileImg: "https://codingmentor22.github.io/assets/img/testimonials/testimonials-1.jpg",
                    role: "Senior Software Engineer",
                    background: "BTech - (CSE)",
                    comment: `A mentor is someone who sees more talent and ability within you, than you see in your self, and
                    brings it out of you. This was true still I remember the day where I was not able to write even or
                    odd programs now capable of developing JAVA APIs. I can do nothing but to thank you Rajendra for all
                    your great efforts to guide me through correct path. you have been a great mentor always. Thank you
                    for your support, patience, and advice.`,
                    social: [
                        {
                            socialMediaName: "linkedin",
                            url: ""
                        },
                        {
                            socialMediaName: "github",
                            url: ""
                        }
                    ]
                },
                {
                    company: "HCL",
                    name: "Swetha",
                    profileImg: "https://codingmentor22.github.io/assets/img/testimonials/testimonials-1.jpg",
                    role: "Senior Software Engineer",
                    background: "BTech - (CSE)",
                    comment: `A mentor is someone who sees more talent and ability within you, than you see in your self, and
                    brings it out of you. This was true still I remember the day where I was not able to write even or
                    odd programs now capable of developing JAVA APIs. I can do nothing but to thank you Rajendra for all
                    your great efforts to guide me through correct path. you have been a great mentor always. Thank you
                    for your support, patience, and advice.`,
                    social: [
                        {
                            socialMediaName: "linkedin",
                            url: ""
                        },
                        {
                            socialMediaName: "github",
                            url: ""
                        }
                    ]
                },
            ]
        }
    ]
}