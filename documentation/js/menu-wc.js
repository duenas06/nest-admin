'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tyt-admin-nest documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-bff7a8a97cdd6ef2063c1b954ff4ec2e7816ce0cc3fbcbe9e0a55e7648d29a04b501b53872f16d357114f666063a1148322cd21474da13dc62073c8275b288d0"' : 'data-target="#xs-controllers-links-module-AppModule-bff7a8a97cdd6ef2063c1b954ff4ec2e7816ce0cc3fbcbe9e0a55e7648d29a04b501b53872f16d357114f666063a1148322cd21474da13dc62073c8275b288d0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-bff7a8a97cdd6ef2063c1b954ff4ec2e7816ce0cc3fbcbe9e0a55e7648d29a04b501b53872f16d357114f666063a1148322cd21474da13dc62073c8275b288d0"' :
                                            'id="xs-controllers-links-module-AppModule-bff7a8a97cdd6ef2063c1b954ff4ec2e7816ce0cc3fbcbe9e0a55e7648d29a04b501b53872f16d357114f666063a1148322cd21474da13dc62073c8275b288d0"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-bff7a8a97cdd6ef2063c1b954ff4ec2e7816ce0cc3fbcbe9e0a55e7648d29a04b501b53872f16d357114f666063a1148322cd21474da13dc62073c8275b288d0"' : 'data-target="#xs-injectables-links-module-AppModule-bff7a8a97cdd6ef2063c1b954ff4ec2e7816ce0cc3fbcbe9e0a55e7648d29a04b501b53872f16d357114f666063a1148322cd21474da13dc62073c8275b288d0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-bff7a8a97cdd6ef2063c1b954ff4ec2e7816ce0cc3fbcbe9e0a55e7648d29a04b501b53872f16d357114f666063a1148322cd21474da13dc62073c8275b288d0"' :
                                        'id="xs-injectables-links-module-AppModule-bff7a8a97cdd6ef2063c1b954ff4ec2e7816ce0cc3fbcbe9e0a55e7648d29a04b501b53872f16d357114f666063a1148322cd21474da13dc62073c8275b288d0"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-7f834099573ef2f2989362b840cfb23b10a90fd9d75477054092b7f7da7ef015696345a687827ea26336b4c8809f307d731cd1c48934090ae740825cc19d1373"' : 'data-target="#xs-controllers-links-module-AuthModule-7f834099573ef2f2989362b840cfb23b10a90fd9d75477054092b7f7da7ef015696345a687827ea26336b4c8809f307d731cd1c48934090ae740825cc19d1373"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-7f834099573ef2f2989362b840cfb23b10a90fd9d75477054092b7f7da7ef015696345a687827ea26336b4c8809f307d731cd1c48934090ae740825cc19d1373"' :
                                            'id="xs-controllers-links-module-AuthModule-7f834099573ef2f2989362b840cfb23b10a90fd9d75477054092b7f7da7ef015696345a687827ea26336b4c8809f307d731cd1c48934090ae740825cc19d1373"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-7f834099573ef2f2989362b840cfb23b10a90fd9d75477054092b7f7da7ef015696345a687827ea26336b4c8809f307d731cd1c48934090ae740825cc19d1373"' : 'data-target="#xs-injectables-links-module-AuthModule-7f834099573ef2f2989362b840cfb23b10a90fd9d75477054092b7f7da7ef015696345a687827ea26336b4c8809f307d731cd1c48934090ae740825cc19d1373"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-7f834099573ef2f2989362b840cfb23b10a90fd9d75477054092b7f7da7ef015696345a687827ea26336b4c8809f307d731cd1c48934090ae740825cc19d1373"' :
                                        'id="xs-injectables-links-module-AuthModule-7f834099573ef2f2989362b840cfb23b10a90fd9d75477054092b7f7da7ef015696345a687827ea26336b4c8809f307d731cd1c48934090ae740825cc19d1373"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/QuizModule.html" data-type="entity-link" >QuizModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-QuizModule-50a6e6713348b2ff978a4928dc7103324d7e00ac6025fcc36f72af2a04214c89be4a290f115c6d45e98108ec820d6cfe77f7897fb678500262458f796ac75cec"' : 'data-target="#xs-controllers-links-module-QuizModule-50a6e6713348b2ff978a4928dc7103324d7e00ac6025fcc36f72af2a04214c89be4a290f115c6d45e98108ec820d6cfe77f7897fb678500262458f796ac75cec"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-QuizModule-50a6e6713348b2ff978a4928dc7103324d7e00ac6025fcc36f72af2a04214c89be4a290f115c6d45e98108ec820d6cfe77f7897fb678500262458f796ac75cec"' :
                                            'id="xs-controllers-links-module-QuizModule-50a6e6713348b2ff978a4928dc7103324d7e00ac6025fcc36f72af2a04214c89be4a290f115c6d45e98108ec820d6cfe77f7897fb678500262458f796ac75cec"' }>
                                            <li class="link">
                                                <a href="controllers/QuizController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuizController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-QuizModule-50a6e6713348b2ff978a4928dc7103324d7e00ac6025fcc36f72af2a04214c89be4a290f115c6d45e98108ec820d6cfe77f7897fb678500262458f796ac75cec"' : 'data-target="#xs-injectables-links-module-QuizModule-50a6e6713348b2ff978a4928dc7103324d7e00ac6025fcc36f72af2a04214c89be4a290f115c6d45e98108ec820d6cfe77f7897fb678500262458f796ac75cec"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-QuizModule-50a6e6713348b2ff978a4928dc7103324d7e00ac6025fcc36f72af2a04214c89be4a290f115c6d45e98108ec820d6cfe77f7897fb678500262458f796ac75cec"' :
                                        'id="xs-injectables-links-module-QuizModule-50a6e6713348b2ff978a4928dc7103324d7e00ac6025fcc36f72af2a04214c89be4a290f115c6d45e98108ec820d6cfe77f7897fb678500262458f796ac75cec"' }>
                                        <li class="link">
                                            <a href="injectables/QuizService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuizService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentsModule.html" data-type="entity-link" >StudentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-StudentsModule-399f2e6ed2bf8e5192c94df4a28c5efb412e493988131f856958533202d562dc870b68eb50bf22c9febf265f3cfa875cb0dd9f2fc486267801487c8231106324"' : 'data-target="#xs-controllers-links-module-StudentsModule-399f2e6ed2bf8e5192c94df4a28c5efb412e493988131f856958533202d562dc870b68eb50bf22c9febf265f3cfa875cb0dd9f2fc486267801487c8231106324"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StudentsModule-399f2e6ed2bf8e5192c94df4a28c5efb412e493988131f856958533202d562dc870b68eb50bf22c9febf265f3cfa875cb0dd9f2fc486267801487c8231106324"' :
                                            'id="xs-controllers-links-module-StudentsModule-399f2e6ed2bf8e5192c94df4a28c5efb412e493988131f856958533202d562dc870b68eb50bf22c9febf265f3cfa875cb0dd9f2fc486267801487c8231106324"' }>
                                            <li class="link">
                                                <a href="controllers/StudentsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StudentsModule-399f2e6ed2bf8e5192c94df4a28c5efb412e493988131f856958533202d562dc870b68eb50bf22c9febf265f3cfa875cb0dd9f2fc486267801487c8231106324"' : 'data-target="#xs-injectables-links-module-StudentsModule-399f2e6ed2bf8e5192c94df4a28c5efb412e493988131f856958533202d562dc870b68eb50bf22c9febf265f3cfa875cb0dd9f2fc486267801487c8231106324"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StudentsModule-399f2e6ed2bf8e5192c94df4a28c5efb412e493988131f856958533202d562dc870b68eb50bf22c9febf265f3cfa875cb0dd9f2fc486267801487c8231106324"' :
                                        'id="xs-injectables-links-module-StudentsModule-399f2e6ed2bf8e5192c94df4a28c5efb412e493988131f856958533202d562dc870b68eb50bf22c9febf265f3cfa875cb0dd9f2fc486267801487c8231106324"' }>
                                        <li class="link">
                                            <a href="injectables/StudentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TeachersModule.html" data-type="entity-link" >TeachersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TeachersModule-0c9cfa5cb841ee33d6b89e532e7187c0110479369f026cbe129ba8511a0da73075e3a14410c3e731731705bfae5e9e1df14851b143ce17087a4a67f0bd7f6d8a"' : 'data-target="#xs-controllers-links-module-TeachersModule-0c9cfa5cb841ee33d6b89e532e7187c0110479369f026cbe129ba8511a0da73075e3a14410c3e731731705bfae5e9e1df14851b143ce17087a4a67f0bd7f6d8a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TeachersModule-0c9cfa5cb841ee33d6b89e532e7187c0110479369f026cbe129ba8511a0da73075e3a14410c3e731731705bfae5e9e1df14851b143ce17087a4a67f0bd7f6d8a"' :
                                            'id="xs-controllers-links-module-TeachersModule-0c9cfa5cb841ee33d6b89e532e7187c0110479369f026cbe129ba8511a0da73075e3a14410c3e731731705bfae5e9e1df14851b143ce17087a4a67f0bd7f6d8a"' }>
                                            <li class="link">
                                                <a href="controllers/TeachersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeachersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TeachersModule-0c9cfa5cb841ee33d6b89e532e7187c0110479369f026cbe129ba8511a0da73075e3a14410c3e731731705bfae5e9e1df14851b143ce17087a4a67f0bd7f6d8a"' : 'data-target="#xs-injectables-links-module-TeachersModule-0c9cfa5cb841ee33d6b89e532e7187c0110479369f026cbe129ba8511a0da73075e3a14410c3e731731705bfae5e9e1df14851b143ce17087a4a67f0bd7f6d8a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TeachersModule-0c9cfa5cb841ee33d6b89e532e7187c0110479369f026cbe129ba8511a0da73075e3a14410c3e731731705bfae5e9e1df14851b143ce17087a4a67f0bd7f6d8a"' :
                                        'id="xs-injectables-links-module-TeachersModule-0c9cfa5cb841ee33d6b89e532e7187c0110479369f026cbe129ba8511a0da73075e3a14410c3e731731705bfae5e9e1df14851b143ce17087a4a67f0bd7f6d8a"' }>
                                        <li class="link">
                                            <a href="injectables/TeachersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeachersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/QuizController.html" data-type="entity-link" >QuizController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/StudentsController.html" data-type="entity-link" >StudentsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TeachersController.html" data-type="entity-link" >TeachersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/StudentsEntity.html" data-type="entity-link" >StudentsEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TeachersEntity.html" data-type="entity-link" >TeachersEntity</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateQuizDto.html" data-type="entity-link" >CreateQuizDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateStudentDto.html" data-type="entity-link" >CreateStudentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTeacherDto.html" data-type="entity-link" >CreateTeacherDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Quiz.html" data-type="entity-link" >Quiz</a>
                            </li>
                            <li class="link">
                                <a href="classes/Quiz-1.html" data-type="entity-link" >Quiz</a>
                            </li>
                            <li class="link">
                                <a href="classes/Student.html" data-type="entity-link" >Student</a>
                            </li>
                            <li class="link">
                                <a href="classes/StudentLogin.html" data-type="entity-link" >StudentLogin</a>
                            </li>
                            <li class="link">
                                <a href="classes/StudentLogin-1.html" data-type="entity-link" >StudentLogin</a>
                            </li>
                            <li class="link">
                                <a href="classes/StudentValidation.html" data-type="entity-link" >StudentValidation</a>
                            </li>
                            <li class="link">
                                <a href="classes/StudentValidation-1.html" data-type="entity-link" >StudentValidation</a>
                            </li>
                            <li class="link">
                                <a href="classes/Teacher.html" data-type="entity-link" >Teacher</a>
                            </li>
                            <li class="link">
                                <a href="classes/Teacher-1.html" data-type="entity-link" >Teacher</a>
                            </li>
                            <li class="link">
                                <a href="classes/TeacherLogin.html" data-type="entity-link" >TeacherLogin</a>
                            </li>
                            <li class="link">
                                <a href="classes/TeacherLogin-1.html" data-type="entity-link" >TeacherLogin</a>
                            </li>
                            <li class="link">
                                <a href="classes/TeacherValidation.html" data-type="entity-link" >TeacherValidation</a>
                            </li>
                            <li class="link">
                                <a href="classes/TeacherValidation-1.html" data-type="entity-link" >TeacherValidation</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateQuizDto.html" data-type="entity-link" >UpdateQuizDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateStudentDto.html" data-type="entity-link" >UpdateStudentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTeacherDto.html" data-type="entity-link" >UpdateTeacherDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuizService.html" data-type="entity-link" >QuizService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentsService.html" data-type="entity-link" >StudentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TeachersService.html" data-type="entity-link" >TeachersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/JwtPayload.html" data-type="entity-link" >JwtPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Students.html" data-type="entity-link" >Students</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Teachers.html" data-type="entity-link" >Teachers</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});