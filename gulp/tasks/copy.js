/***************************************************************************
 * Created by Yves Schelpe (ys@delegate-it.be) for Delegate-IT.be
 *         at Sat Jan 28 2017 23:10:59
 * Copyright (c) 2017 Delegate-IT.be
 ***************************************************************************/

// Task that runs the full copy cycle.

module.exports = {
    dep: ['copy:html', 'copy:images', 'copy:icons', 'copy:vendors', 'copy:config:packagejson', 'copy:config:configjson']
};