import type {Class, TimetableClass} from "~/types";

const judoAdults: Class = {
      id: "class-judo-adults",
      title: "Judo for Adults and Teens",
      description:
        '<p>Catering to both recreational and competition players, we strive for an enjoyable and safe environment in which to train the sport and martial art aspects of Judo.</p>' +
        '<p>In this class you will learn to throw others, fall safely, control others on the ground through pins and submissions (joint locks and strangles). As with everything we do, the emphasis is on the safety and welfare of each other, so these valuable skills are able to be learnt in a pressure-free environment.</p>'
    }
const judoKids: Class = {
      id: "class-judo-kids",
      title: "Judo for Kids",
      description:
        '<p>Tailored especially for kids 12 and under, the focus is on learning valuable skills through fun.</p>' +
        '<p>In this class, children will learn essential skills for self defence, co-ordination, fitness as well as social skills as they interact physically with other kids. They will learn to throw, fall safely as well as co-ordinate on the ground whilst they try to hold each other down.</p>' +
        '<p>Judo is one of the best martial arts and sports for children as it allows them to "wrestle" in a safe and technical environment which is well known to help in development of both the body and mind of the child.</p>'
    }
const jiuJitsu: Class = {
      id: "class-jiu-jitsu",
      title: "Jiu Jitsu for Adults and Teens",
      description:
        '<p>This class is focused on the core components of Jiu Jitsu.</p>' +
        '<p>These are the techniqes and concepts that anyone can learn that build a solid framework with which to expand into any specialised "style" a student may wish.</p>' +
        '<p>Focusing mostly on techniques that are useful in both the sportive and self defence aspect of the art, this class is great for beginners but also very useful for experienced students to hone in the details of techniques and concepts.</p>'
    }
const openMat: Class = {
      id: "class-open-mat",
      title: "Judo and Jiu Jitsu Open Mat",
      description:
        '<p>Whether you are a Judo student or a Jiu Jitsu student or both, this session is a great opportunity to do free practice with others. Many people use the time to get some randori/rolling rounds (sparring) in, but you can also drill techniques or work through concepts with other students.</p>' +
        '<p>We are quite liberal with our allowed techniques, but as always safety and the welfare of your training partners is the number one priority.</p>'
    }
const privateClass: Class = {
    id: "class-private",
    title: "Private Class",
    description:
      '<p>Available on request.</p>' +
      '<p>When you need to work on something specific or outside the standard class structure we can work out a time together in which to focus on your needs. This option has been taken up by both students of the club and visitors who wish to focus more specifically on a goal.</p>' +
      '<p>We have experience working in larger classes as well as one-on-one settings, so contact us if you wish to arrange a session. We strongly recommend bringing a partner as it can be much easier to demonstrate and practice techniques in this way (plus you can split the cost between each other if you wish).</p>'
  }

export const classes: Class[] = [
  judoAdults,
  judoKids,
  jiuJitsu,
  openMat,
  privateClass
];

export const mondayClasses: TimetableClass[] = [
  {
    class: judoAdults,
    time: "6:30pm - 8:00pm"
  }
]

export const wednesdayClasses: TimetableClass[] = [
  {
    class: jiuJitsu,
    time: "5:30pm - 6:30pm"
  },
  {
    class: openMat,
    time: "6:30pm - 8:00pm"
  }
]

export const fridayClasses: TimetableClass[] = [
  {
    class: judoAdults,
    time: "10:00am - 12:00am (Erina dojo)"
  },
  {
    class: judoKids,
    time: "5:30pm - 6:30pm"
  },
  {
    class: judoAdults,
    time: "6:30pm - 8:00pm"
  }
]

export const sundayClasses: TimetableClass[] = [
  {
    class: openMat,
    time: "11:00am - 1:00pm (Erina dojo)"
  }
]