/**
 * Created by JCel on 02/01/2017.
 */
$(document).ready(function() {

    function generateRandomPoints(nbPoints) {

        var randomPoints = [];
        for (var i = 0; i < nbPoints; i++) {
            randomPoint = new Point(Point.random());
            randomPoints.push(randomPoint);
        }
        return randomPoints;
    }

    function piMonteCarloCalcul(randomPoints) {

        var totalPointCercle = 0;
        randomPoints.forEach(function(randomPoint) {
            if ((randomPoint.x * randomPoint.x + randomPoint.y * randomPoint.y) <= 1)
                totalPointCercle++;
        });

        return (totalPointCercle / randomPoints.length) * 4;
    }

    function drawBlackCarre(taille) {

        var topLeft = new Point(0, 0);
        var rectSize = new Size(taille, taille);
        var rect = new Path.Rectangle(topLeft, rectSize);
        rect.strokeColor = 'black';
    }

    function drawArc(tailleCarre) {

        var handleOut = new Point(tailleCarre / 2, 0);
        var handleIn = new Point(0, -(tailleCarre / 2));

        var firstPoint = new Point(0, 0);
        var firstSegment = new Segment(firstPoint, null, handleOut);

        var secondPoint = new Point(tailleCarre, tailleCarre);
        var secondSegment = new Segment(secondPoint, handleIn, null);

        var path = new Path(firstSegment, secondSegment);
        path.strokeColor = 'black';
    }

    function piMonteCarloDraw(randomPoints, tailleCarre, taillePoint) {
        project.clear();

        paper.view.viewSize.width = tailleCarre;
        paper.view.viewSize.height = tailleCarre;

        var pointMax = new Point(tailleCarre, tailleCarre);


        var circlePath = new Path.Circle(pointMax, taillePoint);
        circlePath.fillColor = 'aquamarine';
        var cicleSymbol = cicleSymbol = new Symbol(circlePath);

        randomPoints.forEach(function(randomPoint) {

            cicleSymbol.place(randomPoint * pointMax);

        });

        drawBlackCarre(tailleCarre);
        drawArc(tailleCarre);
    }

    function piMonteCarlo(nbPoints, taillePoint) {

        randomPoints = generateRandomPoints(nbPoints);

        $("#piCalculatorResult").html(piMonteCarloCalcul(randomPoints));

        var tailleDessin = view.size.width;
        piMonteCarloDraw(randomPoints, tailleDessin, taillePoint);
    }

    piMonteCarlo(
        $('#piMonteCarloNbPoint').val(),
        $('#piMonteCarloSizePoint').val()
    );

    $('#bttnPiMonteCarlo').click(function() {

        piMonteCarlo(
            $('#piMonteCarloNbPoint').val(),
            $('#piMonteCarloSizePoint').val()
        );
    });
});
