/**
 * Created by JCel on 02/01/2017.
 */
var tailleDessin = view.size.height;
var pointMax = new Point(tailleDessin, tailleDessin);
var totalPointCarre = 100;
var totalPointCercle = 0;
var randomPoints = [];
var randomPoint;
for (var i = 0; i < totalPointCarre; i++) {
    randomPoint = new Point(Point.random());
    console.log(randomPoint);
    if(( randomPoint.x*randomPoint.x + randomPoint.y*randomPoint.y ) <= 1)
        totalPointCercle++;

    randomPoints.push(randomPoint);
}
console.log(totalPointCercle)
var result = (totalPointCercle/totalPointCarre) * 4;

$("#result").html(result);

var topLeft = new Point(0, 0);
var rectSize = new Size(tailleDessin, tailleDessin);
var rect = new Path.Rectangle(topLeft, rectSize);
rect.strokeColor = 'black';

var handleOut = new Point(tailleDessin/2, 0);
var handleIn = new Point(0, -(tailleDessin/2));

var firstPoint = new Point(0, 0);
var firstSegment = new Segment(firstPoint, null, handleOut);

var secondPoint = new Point(tailleDessin, tailleDessin);
var secondSegment = new Segment(secondPoint, handleIn, null);

var path = new Path(firstSegment, secondSegment);
path.strokeColor = 'black';

var circlePath = new Path.Circle(pointMax * Point.random(), 2);
circlePath.fillColor = 'aquamarine';
var cicleSymbol = new Symbol(circlePath);

randomPoints.forEach(function (randomPoint) {
    cicleSymbol.place(randomPoint * pointMax);
});