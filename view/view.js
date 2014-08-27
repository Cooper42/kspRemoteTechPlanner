﻿var View = (function () {
    function View(stage, innerSize, outerSize) {
        this.shapes = new createjs.Container();
        this.texts = new createjs.Container();
        stage.addChild(this.shapes);
        stage.addChild(this.texts);

        this.innerSize = innerSize;
        this.outerSize = outerSize;
    }
    Object.defineProperty(View.prototype, "innerCenter", {
        get: function () {
            return new Point(this.innerSize / 2, this.innerSize / 2);
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(View.prototype, "outerCenter", {
        get: function () {
            return new Point(this.outerSize / 2, this.outerSize / 2);
        },
        enumerable: true,
        configurable: true
    });

    View.prototype.toInner = function (valueOuter) {
        return valueOuter * this.innerSize / this.outerSize;
    };

    View.prototype.toOuter = function (valueInner) {
        return valueInner * this.outerSize / this.innerSize;
    };
    View.fontSetNormal = "16px Arial";
    View.fontSetBig = "20px Arial";
    View.localeSetting = { maximumFractionDigits: 3 };
    View.marginText = 8;
    View.marginTextPushed = 24;
    View.strokeLineWidth = 0.8;
    View.dotRadius = 4;
    View.arrowSize = 20;
    return View;
})();
