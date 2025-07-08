import Container from 'react-bootstrap/Container'

const Motivation = () => (
  <Container className="bg-white section p-4 my-5 rounded">
    <a className='target' id='motivation'/>
    <h2 className='display-4 anchor mb-3'>Motivation</h2>
    <p>
      While agile and lean software development has already become mainstream in industry and a strong community has crystallized around the new way of thinking, making the transition to the new mindset is still challenging for many project managers. Besides, as the vast majority of software development projects are unique, agile methods often need to be tailored to accommodate specific situations. However, method tailoring is not trivial and poses serious challenges for practitioners. Indeed, one of the most distinctive features of Scrum is that its practices are not independent, but instead are very tightly coupled and synergistic.
    </p>
    <p>
      Furthermore, Scrum, XP, and Kanban were originally designed for small, single teams and do not provide guidance on dealing with scaling issues, while the last decade has seen the spread of agile into large-scale and distributed projects. To help companies in large-scale transformations, several agile scaling frameworks have been proposed. These off-the-shelf solutions incorporate predefined workflow patterns to deal with issues related to the large number of teams, inter-team coordination, and lack of up-front architecture. Nevertheless, numerous challenges while adopting off-the-shelf frameworks have been reported, including a mismatch between framework and organization, changes in management structure, changes in company policies, and the impossibility of fully implementing the whole framework at once.
    </p>
    <p>
      On top of that, the COVID-19 pandemic has forced co-located teams, who relied on face-to-face communication for work coordination, to transition into a remote work environment. Since agile methods lack guidelines for remote work, it falls upon the agile community to develop systematic solutions for remote agile teams.
    </p>
    <p>
      Currently, we are witnessing a pervasive hype surrounding generative AI coding tools that leverage Large Language Models (LLMs). These tools enable developers to accelerate coding, testing, debugging, refactoring, and documentation processes. Additionally, fine-tuned LLMs hold the potential for enhancing non-programming tasks like user story refinement, estimation, and prioritization. These remarkable advancements not only evoke excitement but also open up new research directions to further explore and optimize the integration of generative AI tools within the realm of Agile Software Development.   
    </p>

  </Container>
)

export default Motivation