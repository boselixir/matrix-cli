require('../bin/matrix-init')
var run = require('child_process').spawn;
var exec = require('child_process').exec;
var colors = require('colors');
var should = require('should');
var sinon = require('sinon');
var i;

describe('Matrix CLI Commands', function() {
    before(function(done) {
        Matrix.localization.init(Matrix.localesFolder, Matrix.config.locale, function() {
            i = Matrix.localization.get;
        })
        done();
    })

    context('Not logged in', function(done) {
        before(function(done) {
            exec('matrix logout')
            console.log('cierra sesion'.magenta);
            done();
        })


        it.skip('should show a log in warning', function(done) {
                var notloggedProc = run('matrix');
                var outputs = new Array();
                notloggedProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });
                notloggedProc.stderr.on('data', function(out) {
                    //console.log('stderr', out.toString());
                })
                notloggedProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(i('matrix.please_login')), 'stdout Fail, expecting "' + i('matrix.please_login') + '"')
                    done();
                });

            }) //finish matrix
        it.skip('should request user credentials...', function(done) {
            this.timeout(15000);
            var loginProc = run('matrix', ['login']);
            var outputs = new Array();
            loginProc.stdout.on('data', function(out) {
                outputs.push(out.toString());
                if (out.indexOf('username') > -1) {
                    loginProc.stdin.write('demo.admobilize@gmail.com\n')
                        //outputs.push(out.toString());
                        //console.log('brayan111', outputs);
                } else if (out.toString().indexOf('password') > -1) {
                    loginProc.stdin.write('admobdemo2016\n')
                        //console.log('brayan222--', outputs);
                } else if (out.toString().indexOf('Login Successful') > -1) {
                    //console.log('brayannn--', outputs);
                    // console.log(out.toString().red);
                    if (readConfig().user.hasOwnProperty('token')) {
                        //console.log('brayannn--', outputs.push(out.toString()));
                        //console.log(outputs.toString().red);

                    }
                }

            });

            loginProc.on('close', function(code) {
                outputs.should.matchAny(new RegExp(i('matrix.login.login_success')), 'stdout Fail, expecting "' + i('matrix.login.login_success') + '"')
                done();
            });

        }); //finish matrix `login`
        context('logout', function() {

            it.skip('should show a logout in warning ', function(done) {
                var logoutProc = run('matrix', ['logout']);
                var outputs = new Array();

                logoutProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                })
                logoutProc.stderr.on('data', function(out) {
                    outputs.push(out.toString());
                })
                logoutProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(i('matrix.logout.logout_success')), 'stdout Fail, expecting "' + i('matrix.logout.logout_success') + '"')
                    done();
                })
            });
        }); // Finish  Logout
        context('use ', function() {
            it.skip('should show a in warning', function(done) {
                var useProc = run('matrix', ['use']);
                var outputs = new Array();

                useProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());

                });
                useProc.stderr.on('data', function(out) {
                    outputs.push(out.toString());
                });

                useProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(i('matrix.please_login')), 'stdout Fail, expecting "' + i('matrix.please_login') + '"')
                    done();
                });
            });
        }); // Finish use

        context('sim', function() {
            it.skip('should show a log in warning', function(done) {
                var simProc = run('matrix', ['sim']);
                var outputs = new Array();

                simProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());

                });
                simProc.stderr.on('data', function(out) {
                    outputs.push(out.toString());
                });

                simProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(i('matrix.please_login')), 'stdout Fail, expecting "' + i('matrix.please_login') + '"')
                    done();
                });
            });
        }); // Finish sim

        context('list', function() {
            it.skip('should show a log in warning', function(done) {
                var listProc = run('matrix', ['list']);
                var outputs = new Array();
                listProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });
                listProc.stderr.on('data', function(out) {
                    outputs.push(out.toString());
                });
                listProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(i('matrix.please_login')), 'stdout Fail, expecting "' + i('matrix.please_login') + '"')
                    done();
                });
            });
        }); // Finish 
        context('set', function() {

            it.skip('should show a log in warning', function(done) {
                var setProc = run('matrix', ['set']);
                var outputs = new Array();
                setProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });
                setProc.stderr.on('data', function(out) {
                    outputs.push(out.toString());
                });
                setProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(i('matrix.please_login')), 'stdout Fail, expecting "' + i('matrix.please_login') + '"')
                    done();
                });
            });
        }); // Finish set
        context('reboot', function() {
            it.skip('should show a log in warning', function(done) {
                var rebootProc = run('matrix', ['reboot']);
                var outputs = new Array();
                rebootProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });
                rebootProc.stderr.on('data', function(out) {
                    outputs.push(out.toString());
                });
                rebootProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(i('matrix.please_login')), 'stdout Fail, expecting "' + i('matrix.please_login') + '"')
                    done();
                });
            });
        }); // Finish reboot
        context('install', function() {
            it.skip('should show a log in warning', function(done) {
                var installProc = run('matrix', ['install']);
                var outputs = new Array();
                installProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });
                installProc.stderr.on('data', function(out) {
                    outputs.push(out.toString());
                });
                installProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(i('matrix.please_login')), 'stdout Fail, expecting "' + i('matrix.please_login') + '"')
                    done();
                });

            });
        }); //Finish install 
        context('config', function() {
            it.skip('should show a log in warning', function(done) {
                var configProc = run('matrix', ['config']);
                var outputs = new Array();

                configProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });
                configProc.stderr.on('data', function(out) {
                    outputs.push(out.toString());
                });
                configProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(i('matrix.please_login')), 'stdout Fail, expecting "' + i('matrix.please_login') + '"')
                    done();
                });
            });
        }); //Finish config
        context('uninstall', function() {
            it.skip('should show a log in warning', function(done) {
                var uninstallProc = run('matrix', ['uninstall']);
                var outputs = new Array();

                uninstallProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });
                uninstallProc.stderr.on('data', function(out) {
                    outputs.push(out.toString());
                });
                uninstallProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(i('matrix.please_login')), 'stdout Fail, expecting "' + i('matrix.please_login') + '"')
                    done();
                });

            });
        }); //Finish uninstall  
        context('update', function() {
            it.skip('should show a log in warning', function(done) {
                var updateProc = run('matrix', ['update']);
                var outputs = new Array();
                updateProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });
                updateProc.stderr.on('data', function(out) {
                    outputs.push(out.toString());
                });
                updateProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(i('matrix.please_login')), 'stdout Fail, expecting "' + i('matrix.please_login') + '"')
                    done();
                });
            });
        }); //Finish update
        context('start', function() {
            it.skip('should show a log in warning', function(done) {
                var startProc = run('matrix', ['start']);
                var outputs = new Array();
                startProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });
                startProc.stderr.on('data', function(out) {
                    outputs.push(out.toString());
                });
                startProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(i('matrix.please_login')), 'stdout Fail, expecting "' + i('matrix.please_login') + '"')
                    done();
                });
            });
        }); //Finish start
        context('stop', function() {
            it.skip('should show a log in warning', function(done) {
                var stopProc = run('matrix', ['stop']);
                var outputs = new Array();
                stopProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });
                stopProc.stderr.on('data', function(out) {
                    outputs.push(out.toString());
                });
                stopProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(i('matrix.please_login')), 'stdout Fail, expecting "' + i('matrix.please_login') + '"')
                    done();
                });


            });
        }); //Finish stop

        context('restart', function() {
            it.skip('should show a log in warning', function(done) {
                var restartProc = run('matrix', ['restart']);
                var outputs = new Array();
                restartProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });
                restartProc.stderr.on('data', function(out) {
                    outputs.push(out.toString());
                });
                restartProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(i('matrix.please_login')), 'stdout Fail, expecting "' + i('matrix.please_login') + '"')
                    done();
                });


            });
        }); //Finish restart 

        context('create', function() {
            it.skip('should show a log in warning', function(done) {
                var createProc = run('matrix', ['create']);
                var outputs = new Array();
                createProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });
                createProc.stderr.on('data', function(out) {
                    outputs.push(out.toString());
                });
                createProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(i('matrix.please_login')), 'stdout Fail, expecting "' + i('matrix.please_login') + '"')
                    done();
                });
            });
        }); //Finish create 
        context('deploy', function() {
            it.skip('should show a log in warning', function(done) {
                var deployProc = run('matrix', ['deploy']);
                var outputs = new Array();
                deployProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });
                deployProc.stderr.on('data', function(out) {
                    outputs.push(out.toString());
                });
                deployProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(i('matrix.please_login')), 'stdout Fail, expecting "' + i('matrix.please_login') + '"')
                    done();
                });

            });
        }); //Finish deploy 

        context('trigger', function() {
            it.skip('should show a log in warning', function(done) {
                var triggerProc = run('matrix', ['trigger']);
                var outputs = new Array();
                triggerProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });
                triggerProc.stderr.on('data', function(out) {
                    outputs.push(out.toString());
                });
                triggerProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(i('matrix.please_login')), 'stdout Fail, expecting "' + i('matrix.please_login') + '"')
                    done();
                });

            });
        }); //Finish trigger 

        context('log }', function() {
            it.skip('should show a log in warning Log', function(done) {
                var logProc = run('matrix', ['log']);
                var outputs = new Array();
                logProc.stdout.on('data', function(out) {
                    outputs.push(out.toString());
                });
                logProc.stderr.on('data', function(out) {
                    outputs.push(out.toString());
                });
                logProc.on('close', function(code) {
                    outputs.should.matchAny(new RegExp(i('matrix.please_login')), 'stdout Fail, expecting "' + i('matrix.please_login') + '"')
                    done();
                });
            });
        }); //Finish log

        context('Logged in {', function() {
            before(function(done) {
                this.timeout(15000);
                var loginProc = run('matrix', ['login']);
                loginProc.stdout.on('data', function(out) {
                    if (out.toString().indexOf('username') > -1) {
                        console.log('stdout', out.toString());
                        loginProc.stdin.write('demo.admobilize@gmail.com\n')
                    } else if (out.toString().indexOf('password') > -1) {
                        console.log('stdout', out.toString());
                        loginProc.stdin.write('admobdemo2016\n')
                    } else if (out.toString().indexOf('Login Successful') > -1) {
                        console.log('stdout', out.toString());
                        if (readConfig().user.hasOwnProperty('token')) {
                            console.log('stdout', out.toString());
                            console.log(out.toString().red);
                        }
                    }

                });
                loginProc.stderr.on('data', function(out) {
                    console.log('stderr', out.toString())
                })
                loginProc.on('close', function(code) {
                    console.log('Inicia sesion'.magenta);
                    done();
                });

            })

            //NO DEVICE REQUIRED

            context('No parameters specified', function() {
                it.skip('should show the matrix command usage', function(done) {
                    var logProc = run('matrix', ['']);
                    var outputs = new Array();
                    logProc.stdout.on('data', function(out) {
                        console.log('stdout', out.toString())
                        outputs.push(out.toString());
                    });
                    logProc.stderr.on('data', function(out) {
                        console.log('stderr', out.toString());
                    })
                    logProc.on('close', function(code) {
                        console.log('close', outputs)
                        outputs.should.matchAny(/@/, 'stdout Fail, expecting "' + 'you user' + '"')
                        done();
                    });

                });
            }); // Finish matrix 
            context('Parameters specified', function() { //------------------------------------------------

                context('login_NDR', function() {
                    it.skip('should show an "already logged in" warning', function(done) {
                        var loginProc = run('matrix', ['login']);
                        var outputs = new Array();
                        loginProc.stdout.on('data', function(out) {
                            outputs.push(out.toString());
                            loginProc.kill('SIGINT');
                        });
                        loginProc.stderr.on('data', function(out) {
                            console.log('stderr', out.toString());
                        })
                        loginProc.on('close', function(code) {
                            outputs.should.matchAny(new RegExp(i('matrix.login.already_login_warning')), 'stdout Fail, expecting "' + i('matrix.login.already_login_warning') + '"')
                            done();
                        });
                    });
                }); // Finish login


                context('logout', function() {
                    it.skip('should log out', function(done) {
                        var logoutProc = run('matrix', ['logout']);
                        var outputs = new Array();
                        logoutProc.stdout.on('data', function(out) {
                            outputs.push(out.toString());
                        });
                        logoutProc.stderr.on('data', function(out) {
                            console.log('stderr', out.toString());
                        })
                        logoutProc.on('close', function(code) {
                            outputs.should.matchAny(new RegExp(i('matrix.logout.logout_success')), 'stdout Fail, expecting "' + i('matrix.logout.logout_success') + '"')
                            done();
                        });
                    });
                }); // Finish Logout

                context('use', function() {
                    context('No parameters specified ', function() {
                        it.skip('Show "use" command usage', function(done) {
                            var useProc = run('matrix', ['use']);
                            var outputs = new Array();
                            useProc.stdout.on('data', function(out) {
                                console.log('stdout', out.toString())
                                outputs.push(out.toString());
                            });
                            useProc.stderr.on('data', function(out) {
                                console.log('stderr', out.toString());
                            })
                            useProc.on('close', function(code) {
                                outputs.should.matchAny(new RegExp(i('matrix.use.command_help')), 'stdout Fail, expecting "' + i('matrix.use.command_help') + '"')
                                done();
                            });
                        });

                    }); // Finish use                       

                    context('Parameters specified', function() {

                        context('Specified device doesn\'t exist', function() {
                            it.skip('should show an "invalid device" warning', function(done) {
                                var useDProc = run('matrix', ['use', 'xx']);
                                var outputs = new Array();
                                useDProc.stdout.on('data', function(out) {
                                    console.log('stdout', out.toString())
                                    outputs.push(out.toString());
                                });
                                useDProc.stderr.on('data', function(out) {
                                    console.log('stderr', out.toString());
                                })
                                useDProc.on('close', function(code) {
                                    outputs.should.matchAny(new RegExp(i('matrix.use.device_not_found')), 'stdout Fail, expecting "' + i('matrix.use.device_not_found') + '"')
                                    done();
                                });
                            });

                        }); //Finish use
                        context('Current user doesn\'t have permission to use specified device', function() {
                            it.skip('should show an "invalid device" warning', function(done) {
                                var useProc = run('matrix', ['use', 'xxx']);
                                var outputs = new Array();
                                useProc.stdout.on('data', function(out) {
                                    console.log('stdout', out.toString())
                                    outputs.push(out.toString());
                                });
                                useProc.stderr.on('data', function(out) {
                                    console.log('stderr', out.toString());
                                })
                                useProc.on('close', function(code) {
                                    outputs.should.matchAny(new RegExp(i('matrix.use.not_authorized')), 'stdout Fail, expecting "' + i('matrix.use.not_authorized') + '"')
                                    done();
                                });
                            });
                        });
                        context('Specified device exists', function() {
                            it.skip('Show set device as current device', function(done) {
                                var useProc = run('matrix', ['use', 'matrixSimulator']);
                                var outputs = new Array();
                                useProc.stdout.on('data', function(out) {
                                    console.log('stdout', out.toString())
                                    outputs.push(out.toString());
                                });
                                useProc.stderr.on('data', function(out) {
                                    console.log('stderr', out.toString());
                                })
                                useProc.on('close', function(code) {
                                    outputs.should.matchAny(new RegExp(i('matrix.use.using_device_by_name')), 'stdout Fail, expecting "' + i('matrix.use.using_device_by_name') + '"')
                                    done();
                                });

                            });

                        });
                    });
                }); // Finish use

                context('sim', function() {

                    context('No parameters specified ', function() {
                        it.skip('Show "sim" command usage', function(done) {
                            var simProc = run('matrix', ['sim', '']);
                            var outputs = new Array();
                            simProc.stdout.on('data', function(out) {
                                console.log('stdout', out.toString());
                                outputs.push(out.toString());
                            });
                            simProc.stderr.on('data', function(out) {
                                console.log('stderr', out.toString());

                            })

                            simProc.on('close', function(code) {
                                console.log('close', outputs)
                                outputs.should.matchAny(new RegExp(i('matrix.sim.command_help_sim')), 'stdout Fail, expecting "' + i('matrix.sim.command_help_sim') + '"')
                                done();
                            });
                        });
                    });
                    context('Parameters specified init ', function() {

                        context('init', function() { //pending  capture of data 
                            it.skip('should request simulator settings', function(done) {
                                var simProc = run('matrix', ['sim', 'init']);
                                var outputs = new Array();
                                simProc.stdout.on('data', function(out) {
                                    console.log('stdout', out.toString());
                                    simProc.stdin.write('Examsssple\n');
                                    outputs.push(out.toString());
                                });
                                simProc.stderr.on('data', function(out) {
                                    console.log('stderr', out.toString());
                                })

                                simProc.on('close', function(code) {
                                    console.log('close', outputs)
                                    outputs.should.matchAny(new RegExp(i('matrix.sim.init.specify_data_for_init')), 'stdout Fail, expecting "' + i('matrix.sim.init.specify_data_for_init') + '"')
                                    done();
                                });


                            });

                        });

                        context('Simulator hasn\'t been initialized', function() {

                            context('restore', function() { //pending for Error 
                                it.skip('should show an "initialize simulator" warning', function(done) {
                                    var simProc = run('matrix', ['sim', 'restore']);
                                    var outputs = new Array();
                                    simProc.stdout.on('data', function(out) {
                                        outputs.push(out.toString());
                                    });
                                    simProc.stderr.on('data', function(out) {
                                        console.log('stderr', out.toString())
                                    })
                                    simProc.on('close', function(code) {
                                        outputs.should.matchAny(new RegExp(i('matrix.sim.init.warning_sim_init')), 'stdout Fail, expecting "' + i('matrix.sim.init.warning_sim_init') + '"')
                                        done();
                                    });
                                });
                            });

                            context('start', function() {
                                it.skip('should show an "initialize simulator" warning', function(done) {
                                    var simProc = run('matrix', ['sim', 'start']);
                                    var outputs = new Array();
                                    simProc.stdout.on('data', function(out) {
                                        outputs.push(out.toString());
                                    });
                                    simProc.stderr.on('data', function(out) {
                                        console.log('stderr', out.toString())
                                    })
                                    simProc.on('close', function(code) {
                                        outputs.should.matchAny(new RegExp(i('matrix.sim.init.warning_sim_init')), 'stdout Fail, expecting "' + i('matrix.sim.init.warning_sim_init') + '"')
                                        done();
                                    });

                                });
                            });

                            context('upgrade', function() {
                                it.skip('should show an "initialize simulator" warning', function(done) {
                                    var simProc = run('matrix', ['sim', 'upgrade']);
                                    var outputs = new Array();
                                    simProc.stdout.on('data', function(out) {
                                        outputs.push(out.toString());
                                    });
                                    simProc.stderr.on('data', function(out) {
                                        console.log('stderr', out.toString())
                                    })
                                    simProc.on('close', function(code) {
                                        outputs.should.matchAny(new RegExp(i('matrix.sim.init.warning_sim_init')), 'stdout Fail, expecting "' + i('matrix.sim.init.warning_sim_init') + '"')
                                        done();
                                    });
                                });
                            });

                            context('save', function() {
                                it.skip('should show an "initialize simulator" warning', function(done) {
                                    var simProc = run('matrix', ['sim', 'save']);
                                    var outputs = new Array();

                                    simProc.stdout.on('data', function(out) {
                                        outputs.push(out.toString());
                                    });
                                    simProc.stderr.on('data', function(out) {
                                        console.log('stderr', out.toString())
                                    })
                                    simProc.on('close', function(code) {
                                        outputs.should.matchAny(new RegExp(i('matrix.sim.init.warning_sim_init')), 'stdout Fail, expecting "' + i('matrix.sim.init.warning_sim_init') + '"')
                                        done();
                                    });

                                });
                            });

                            context('clear', function() {
                                it.skip('should show an "initialize simulator" warning', function(done) {
                                    var simProc = run('matrix', ['sim', 'init']);
                                    var outputs = new Array();

                                    simProc.stdout.on('data', function(out) {
                                        outputs.push(out.toString());
                                    });
                                    simProc.stderr.on('data', function(out) {
                                        console.log('stderr', out.toString())
                                    })
                                    simProc.on('close', function(code) {
                                        outputs.should.matchAny(new RegExp(i('matrix.sim.init.warning_sim_init')), 'stdout Fail, expecting "' + i('matrix.sim.init.warning_sim_init') + '"')
                                        done();
                                    });
                                });
                            });
                            context('init', function() { //pending  capture of data 
                                it.skip('should request simulator settings', function(done) {
                                    var simProc = run('matrix', ['sim', 'init']);
                                    var outputs = new Array();
                                    simProc.stdout.on('data', function(out) {
                                        console.log('stdout', out.toString());
                                        simProc.stdin.write('Examsssple\n');
                                        outputs.push(out.toString());
                                    });
                                    simProc.stderr.on('data', function(out) {
                                        console.log('stderr', out.toString());
                                    })

                                    simProc.on('close', function(code) {
                                        console.log('close', outputs)
                                        outputs.should.matchAny(new RegExp(i('matrix.sim.init.specify_data_for_init')), 'stdout Fail, expecting "' + i('matrix.sim.init.specify_data_for_init') + '"')
                                        done();
                                    });
                                });
                            });

                        });

                        context('Simulator initialized', function() {

                            /* before(function(done) {
                                 this.timeout(15000);
                                 var simProc = run('matrix', ['sim', 'init']);
                                 var outputs = new Array();
                                 simProc.stdout.on('data', function(out) {
                                     console.log('stdout',out.toString())
                                     simProc.stdin.write('vvvv\n');
                                     simProc.stdin.write('vvv\n');
                                     outputs.push(out.toString());
                                     console.log(outputs,'outputs')

                                 });
                                 simProc.stderr.on('data',function(out){
                                     console.log('stderr', out.toString())
                                 })
                                 simProc.on('close', function(code) {
                                     console.log('Simulator initialized'.magenta,outputs);
                                     done();
                                 });

                             });*/

                            context('restore', function() {
                                it.skip('should reset the simulator', function(done) {
                                    var simProc = run('matrix', ['sim', 'restore']);
                                    var outputs = new Array();
                                    simProc.stdout.on('data', function(out) {
                                        console.log('stdout', out.toString());
                                        outputs.push(out.toString());
                                    });
                                    simProc.stderr.on('data', function(out) {
                                        console.log('stderr', out.toString())
                                    })
                                    simProc.on('close', function(code) {
                                        outputs.should.matchAny(new RegExp(i('matrix.sim.restore.downloading_image')), 'stdout Fail, expecting "' + i('matrix.sim.restore.downloading_image') + '"')
                                        done();
                                    });
                                });
                            });

                            context('start', function() {
                                it.skip('should start MatrixOS virtual environment', function(done) {
                                    var startProc = run('matrix', ['sim', 'start']);
                                    var outputs = new Array();
                                    startProc.stdout.on('data', function(out) {
                                        console.log('stdout', out.toString());
                                    })
                                    startProc.stderr.on('data', function(out) {
                                        console.log('stderr', out.toString());
                                        outputs.push(out.toString());
                                    })
                                    startProc.on('close', function(code) {
                                        console.log('close', outputs)
                                        outputs.should.matchAny(new RegExp(i('matrix.sim.start.starting_sim')), 'stdout Fail, expecting "' + i('matrix.sim.start.starting_sim') + '"')
                                        done();
                                    })
                                });
                            });

                            context('stop', function() {
                                it.skip('should stop MatrixOS virtual environment', function(done) {
                                    var stopProc = run('matrix', ['sim', 'stop']);
                                    var outputs = new Array();
                                    stopProc.stdout.on('data', function(out) {
                                        console.log('stdout', out.toString())
                                        outputs.push(out.toString());
                                    })
                                    stopProc.stderr.on('data', function(out) {
                                        console.log('stderr', out.toString())
                                        outputs.push(out.toString());
                                    })
                                    stopProc.on('close', function(code) {
                                        console,
                                        log('close', outputs)
                                        outputs.should.matchAny(new RegExp(i('matrix.sim.stop.sim_stopped')), 'stdout Fail, expecting "' + i('matrix.sim.stop.sim_stopped') + '"')
                                        done();
                                    })
                                });
                            });

                            context('save', function() {
                                it.skip('should save MatrixOS state, use after deploy / install', function(done) {
                                    var saveProc = run('matrix', ['sim', 'save']);
                                    var outputs = new Array();
                                    saveProc.stdout.on('data', function(out) {
                                        console.log('stdout', out.toString())
                                    })
                                    saveProc.stderr.on('data', function(out) {
                                        console.log('stderr', out.toString())
                                        outputs.push(out.toString());
                                    })
                                    saveProc.on('close', function(code) {
                                        console.log('closeeee', outputs);
                                        outputs.should.matchAny(new RegExp(i('matrix.sim.save.state_saved')), 'stdout Fail, expecting "' + i('matrix.sim.save.state_saved') + '"')
                                        done();
                                    })
                                });
                            });

                            context('clear', function() {
                                it.skip('should remove simulation local data', function(done) {
                                    var clearProc = run('matrix', ['sim', 'clear']);
                                    var outputs = new Array();
                                    clearProc.stdout.on('data', function(out) {
                                        console.log('stdout', out.toString())
                                        outputs.push(out.toString());
                                    })
                                    clearProc.stderr.on('data', function(out) {
                                        console.log('stderr', out.toString())
                                        outputs.push(out.toString());
                                    })
                                    clearProc.on('close', function(code) {
                                        console.log('close', outputs)
                                        outputs.should.matchAny(new RegExp(i('matrix.sim.clear.simulation_cleared')), 'stdout Fail, expecting "' + i('matrix.sim.clear.simulation_cleared') + '"')
                                        done();
                                    })
                                });
                            });

                        });

                        context('Unknown parameter specified', function() {
                            it.skip('should display an "unknown parameter warning"', function(done) {
                                var unkProc = run('matrix', ['sim', 'XXX']);
                                var outputs = new Array();
                                unkProc.stdout.on('data', function(out) {
                                    outputs.push(out.toString());
                                })
                                unkProc.on('close', function(code) {
                                    console.log('brayan', outputs);
                                    outputs.should.matchAny(new RegExp(i('matrix.sim.unknowm_parameter')), 'stdout Fail, expecting "' + i('matrix.sim.unknowm_parameter') + '"')
                                    done();
                                })
                            });
                        });
                    });
                }); //Finish sim

                context('list', function() {

                    context('No parameters specified', function() {
                        it.skip('Show "list" command usage', function(done) {
                            var listProc = run('matrix', ['list', '']);
                            var outputs = new Array();
                            listProc.stdout.on('data', function(out) {
                                console.log('stdout', out.toString());
                                outputs.push(out.toString());
                            })
                            listProc.stderr.on('data', function(out) {
                                console.log('stderr', out.toString());
                            })
                            listProc.stdout.on('close', function(code) {
                                console.log('brayanClose', outputs);
                                outputs.should.matchAny(new RegExp(i('matrix.list.help_devices')), 'stdout Fail, expecting "' + i('matrix.list.help_devices') + '"')
                                done();
                            })
                        });
                    });

                    context('Parameters specified', function() {
                        context('devices', function() {
                            it.skip('display available devices', function(done) { //No se puede recibir la tabla de devices 
                                this.timeout(15000);
                                var listProc = run('matrix', ['list', 'devices']);
                                var outputs = new Array();
                                listProc.stdout.on('data', function(out) {
                                    console.log('stdout', out.toString());
                                    outputs.push(out.toString());
                                });
                                listProc.stderr.on('data', function(out) {
                                    console.log('stderr', out.toString())
                                    outputs.push(out.toString());
                                })
                                listProc.on('close', function(code) {
                                    console.log('close', outputs);
                                    outputs.should.matchAny(new RegExp(i('matrix.list.list_devices')), 'stdout Fail, expecting "' + i('matrix.list.list_devices') + '"')
                                    done();
                                });
                            });
                        });




                        context('groups', function() {
                            it.skip('display groups of devices', function(done) {
                                var groupsProc = run('matrix', ['list', 'groups'])
                                var outputs = new Array();
                                groupsProc.stdout.on('data', function(out) {
                                    console.log('stdout', out.toString());
                                    outputs.push(out.toString())
                                })
                                groupsProc.stderr.on('data', function(out) {
                                    console.log('stderr', out.toString())
                                    outputs.push(out.toString())
                                })
                                groupsProc.on('close', function(code) {
                                    console.log('close', outputs)
                                    outputs.should.matchAny(new RegExp(i('matrix.list.list_groups')), 'stdout Fail, expecting "' + i('matrix.list.list_groups') + '"')
                                    done()
                                })
                            });
                        });

                        context('apps', function() {
                            it.skip('display apps on current device', function(done) {
                                var appsProc = run('matrix', ['list', 'apps'])
                                var outputs = new Array();
                                appsProc.stdout.on('data', function(out) {
                                    console.log('stdout', out.toString());
                                    outputs.push(out.toString())
                                })
                                appsProc.stderr.on('data', function(out) {
                                    console.log('stderr', out.toString())
                                    outputs.push(out.toString())
                                })
                                appsProc.on('close', function(code) {
                                    console.log('close', outputs)
                                    outputs.should.matchAny(new RegExp(i('matrix.list.list_apps')), 'stdout Fail, expecting "' + i('matrix.list.list_apps') + '"')
                                    done()
                                })
                            });
                        });

                        context('all', function() {
                            it.skip('display all devices with installed apps', function(done) {
                                var allProc = run('matrix', ['list', 'all'])
                                var outputs = new Array();
                                appsProc.stdout.on('data', function(out) {
                                    console.log('stdout', out.toString());
                                    outputs.push(out.toString())
                                })
                                appsProc.stderr.on('data', function(out) {
                                    console.log('stderr', out.toString())
                                    outputs.push(out.toString())
                                })
                                appsProc.on('close', function(code) {
                                    console.log('close', outputs)
                                    outputs.should.matchAny(new RegExp(i('matrix.list.list_all')), 'stdout Fail, expecting "' + i('matrix.list.list_all') + '"')
                                    done()
                                })
                            });
                        });

                        context('Unknown parameter specified', function() {
                            it.skip('should display an "unknown parameter warning"', function(done) {

                                var unknownProc = run('matrix', ['list', 'XXXXX'])
                                var outputs = new Array();
                                unknownProc.stdout.on('data', function(out) {
                                    console.log('stdout', out.toString());
                                    outputs.push(out.toString())
                                })
                                unknownProc.stderr.on('data', function(out) {
                                    console.log('stderr', out.toString())
                                    outputs.push(out.toString())
                                })
                                unknownProc.on('close', function(code) {
                                    console.log('close', outputs)
                                    outputs.should.matchAny(new RegExp(i('matrix.list.no_results')), 'stdout Fail, expecting "' + i('matrix.list.no_results') + '"')
                                    done()
                                })
                            });
                        });
                    });
                }); //list

                //DEVICE REQUIRED

                context('set', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {
                        var setProc = run('matrix', ['set', '']);
                        var outputs = new Array();
                        setProc.stdout.on('data', function(out) {
                            console.log('>>>>', out.toString());
                            outputs.push(out.toString());
                        });
                        setProc.stderr.on('data', function(out) {
                            console.log('stderr', out.toString())
                        })
                        setProc.on('close', function(code) {
                            outputs.should.matchAny(new RegExp(i('matrix.set.warning_device_required')), 'stdout Fail, expecting "' + i('matrix.set.warning_device_required') + '"')
                            console.log('close', outputs)
                            done();
                        });
                    });
                }); //Finish set


                context('reboot', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {
                        var rebootProc = run('matrix', ['reboot', '']);
                        var outputs = new Array();
                        rebootProc.stdout.on('data', function(out) {
                            console.log('close', out.toString())
                            outputs.push(out.toString());
                        })
                        rebootProc.stderr.on('data', function(out) {
                            console.log('stderr', out.toString())
                            outputs.push(out.toString());
                        })
                        rebootProc.on('close', function(code) {
                            console.log('close', outputs);
                            outputs.should.matchAny(new RegExp(i('matrix.set.warning_device_required')), 'stdout Fail, expecting "' + i('matrix.set.warning_device_required') + '"')
                            done();
                        })
                    });
                }); // Finish reboot

                context('search', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {
                        var searchProc = run('matrix', ['search']);
                        var outputs = new Array();
                        searchProc.stdout.on('data', function(out) {
                            console.log('stdout', out.toString());
                            outputs.push(out.toString());
                        });
                        searchProc.stderr.on('data', function(out) {
                            console.log('stderr', out.toString())
                            outputs.push(out.toString());
                        })
                        searchProc.on('close', function(code) {
                            outputs.should.matchAny(new RegExp(i('matrix.set.warning_device_required')), 'stdout Fail, expecting "' + i('matrix.set.warning_device_required') + '"')
                            console.log('close', outputs)
                            done();
                        });
                    });
                }); // Finish search

                context('install', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {
                        var installProc = run('matrix', ['install']);
                        var outputs = new Array();
                        installProc.stdout.on('data', function(out) {
                            console.log('stdout', out.toString());
                            outputs.push(out.toString())
                        })
                        installProc.stderr.on('data', function(out) {
                            outputs.push(out.toString());
                            console.log('stderr', out.toString())
                        });
                        installProc.on('close', function(code) {
                            console.log('close', outputs)
                            outputs.should.matchAny(new RegExp(i('matrix.set.warning_device_required')), 'stdout Fail, expecting "' + i('matrix.set.warning_device_required') + '"')
                            done();
                        });
                    });
                }); // Finish install

                context('config', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {
                        var configProc = run('matrix', ['config']);
                        var outputs = new Array();
                        configProc.stdout.on('data', function(out) {
                            console.log('stdout', out.toString());
                            outputs.push(out.toString())
                        })
                        configProc.stderr.on('data', function(out) {
                            outputs.push(out.toString());
                            console.log('stderr', out.toString())
                        });
                        configProc.on('close', function(code) {
                            console.log('close', outputs)
                            outputs.should.matchAny(new RegExp(i('matrix.set.warning_device_required')), 'stdout Fail, expecting "' + i('matrix.set.warning_device_required') + '"')
                            done();
                        });
                    });
                }); // Finish config

                context('uninstall', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {
                        var uninstallProc = run('matrix', ['uninstall']);
                        var outputs = new Array();
                        uninstallProc.stdout.on('data', function(out) {
                            console.log('stdout', out.toString());
                            outputs.push(out.toString())
                        })
                        uninstallProc.stderr.on('data', function(out) {
                            outputs.push(out.toString());
                            console.log('stderr', out.toString())
                        });
                        uninstallProc.on('close', function(code) {
                            console.log('close', outputs)
                            outputs.should.matchAny(new RegExp(i('matrix.set.warning_device_required')), 'stdout Fail, expecting "' + i('matrix.set.warning_device_required') + '"')
                            done();
                        });
                    });
                }); // Finish uninstall

                context('update', function() {
                    it.skip('should show a "Select a Device" warning', function(done) {
                        var updateProc = run('matrix', ['update']);
                        var outputs = new Array();
                        updateProc.stdout.on('data', function(out) {
                            console.log('stdout', out.toString());
                            outputs.push(out.toString())
                        })
                        updateProc.stderr.on('data', function(out) {
                            outputs.push(out.toString());
                            console.log('stderr', out.toString())
                        });
                        updateProc.on('close', function(code) {
                            console.log('close', outputs)
                            outputs.should.matchAny(new RegExp(i('matrix.set.warning_device_required')), 'stdout Fail, expecting "' + i('matrix.set.warning_device_required') + '"')
                            done();
                        });
                    }); // Finish update


                    context('start', function() {
                        it.skip('should show a "Select a Device" warning', function(done) {
                            var startProc = run('matrix', ['start']);
                            var outputs = new Array();
                            startProc.stdout.on('data', function(out) {
                                console.log('stdout', out.toString());
                                outputs.push(out.toString())
                            })
                            startProc.stderr.on('data', function(out) {
                                outputs.push(out.toString());
                                console.log('stderr', out.toString())
                            });
                            startProc.on('close', function(code) {
                                console.log('close', outputs)
                                outputs.should.matchAny(new RegExp(i('matrix.set.warning_device_required')), 'stdout Fail, expecting "' + i('matrix.set.warning_device_required') + '"')
                                done();
                            });
                        });
                    }); // Finish start

                    context('stop', function() {
                        it.skip('should show a "Select a Device" warning', function(done) {
                            var stopProc = run('matrix', ['stop']);
                            var outputs = new Array();
                            stopProc.stdout.on('data', function(out) {
                                console.log('stdout', out.toString());
                                outputs.push(out.toString())
                            })
                            stopProc.stderr.on('data', function(out) {
                                outputs.push(out.toString());
                                console.log('stderr', out.toString())
                            });
                            stopProc.on('close', function(code) {
                                console.log('close', outputs)
                                outputs.should.matchAny(new RegExp(i('matrix.set.warning_device_required')), 'stdout Fail, expecting "' + i('matrix.set.warning_device_required') + '"')
                                done();
                            });
                        });
                    }); //Finish stop

                    context('restart', function() {
                        it.skip('should show a "Select a Device" warning', function(done) {
                            var restartProc = run('matrix', ['restart']);
                            var outputs = new Array();

                            restartProc.stdout.on('data', function(out) {
                                console.log('stdout', out.toString());
                                outputs.push(out.toString())
                            })
                            restartProc.stderr.on('data', function(out) {
                                outputs.push(out.toString());
                                console.log('stderr', out.toString())
                            });
                            restartProc.on('close', function(code) {
                                console.log('close', outputs)
                                outputs.should.matchAny(new RegExp(i('matrix.set.warning_device_required')), 'stdout Fail, expecting "' + i('matrix.set.warning_device_required') + '"')
                                done();
                            });
                        });
                    }); // Finish restart


                    context('create', function() {
                        it.skip('should show a "Select a Device" warning', function(done) {
                            var createProc = run('matrix', ['create']);
                            var outputs = new Array();

                            createProc.stdout.on('data', function(out) {
                                console.log('stdout', out.toString());
                                outputs.push(out.toString())
                            })
                            createProc.stderr.on('data', function(out) {
                                outputs.push(out.toString());
                                console.log('stderr', out.toString())
                            });
                            createProc.on('close', function(code) {
                                console.log('close', outputs)
                                outputs.should.matchAny(new RegExp(i('matrix.set.warning_device_required')), 'stdout Fail, expecting "' + i('matrix.set.warning_device_required') + '"')
                                done();
                            });
                        });
                    }); // Finish create

                    context('deploy', function() {
                        it.skip('should show a "Select a Device" warning', function(done) {
                            var deployProc = run('matrix', ['deploy']);
                            var outputs = new Array();

                            deployProc.stdout.on('data', function(out) {
                                console.log('stdout', out.toString());
                                outputs.push(out.toString())
                            })
                            deployProc.stderr.on('data', function(out) {
                                outputs.push(out.toString());
                                console.log('stderr', out.toString())
                            });
                            deployProc.on('close', function(code) {
                                console.log('close', outputs)
                                outputs.should.matchAny(new RegExp(i('matrix.set.warning_device_required')), 'stdout Fail, expecting "' + i('matrix.set.warning_device_required') + '"')
                                done();
                            });
                        });
                    }); // Finish deploy

                    context('trigger', function() {
                        it.skip('should show a "Select a Device" warning', function(done) {
                            var triggerProc = run('matrix', ['trigger']);
                            var outputs = new Array();
                            triggerProc.stdout.on('data', function(out) {
                                console.log('stdout', out.toString());
                                outputs.push(out.toString())
                            })
                            triggerProc.stderr.on('data', function(out) {
                                outputs.push(out.toString());
                                console.log('stderr', out.toString())
                            });
                            triggerProc.on('close', function(code) {
                                console.log('close', outputs)
                                outputs.should.matchAny(new RegExp(i('matrix.set.warning_device_required')), 'stdout Fail, expecting "' + i('matrix.set.warning_device_required') + '"')
                                done();
                            });
                        });
                    }); // Finish trigger

                    context('log', function() {
                        it.skip('should show a "Select a Device" warning', function(done) {
                            var logProc = run('matrix', ['log']);
                            var outputs = new Array();

                            logProc.stdout.on('data', function(out) {
                                console.log('stdout', out.toString());
                                outputs.push(out.toString())
                            })
                            logProc.stderr.on('data', function(out) {
                                outputs.push(out.toString());
                                console.log('stderr', out.toString())
                            });
                            logProc.on('close', function(code) {
                                console.log('close', outputs)
                                outputs.should.matchAny(new RegExp(i('matrix.set.warning_device_required')), 'stdout Fail, expecting "' + i('matrix.set.warning_device_required') + '"')
                                done();
                            });

                        });
                    }); // Finish log

                });

            })

        })

    })
})

function readConfig() {
    return JSON.parse(require('fs').readFileSync('./tmp/store.json'));
}